import { Table, TableCell, TableHead, TablePagination, TableRow, TableSortLabel } from "@mui/material"
import { useState } from "react";

export default function useTable(records, headCells, filterFn) {
    const [order, setOrder] = useState();
    const [orderBy, setOrderBy] = useState();

    const TblContainer = props => (
        <Table size='small'
            sx={{
                '& thead th': {
                    fontWeight: '600',
                    color: 'darkOlive',
                    backgroundColor: 'beige'
                },
                '& tbody td': {
                    fontWeight: '300',
                    fontSize: '0.85em'
                },
                '& tbody tr:hover': {
                    backgroundColor: '#fffbf2',
                    cursor: 'pointer'
                }
            }}
        >
            {props.children}
        </Table>
    )
    
    const TblHead = props => {

        const handleSort = (cellId) => {
            const isAsc = orderBy === cellId && order === 'asc';
            setOrder(isAsc ? 'desc' : 'asc')
            setOrderBy(cellId);

        }

        return (
            <TableHead>
                <TableRow>
                    {
                        headCells.map(headCell => (
                        <TableCell key={headCell.id} 
                        sortDirection={orderBy == headCell.id ? order : false}>
                            {headCell.disableSorting ? headCell.label :
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={() => handleSort(headCell.id)}>
                                {headCell.label}
                            </TableSortLabel>
                            }
                        </TableCell>))
                    }
                </TableRow>
            </TableHead>
    )
    }

    function stableSort(array, comparator){
        const stabilizedThis = array.map((element, index) => [element, index]);
        
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function descendingComparator(a, b, orderBy) {
        if(b[orderBy] < a[orderBy]) return -1;
        if(b[orderBy] > a[orderBy]) return 1;
        return 0;
    }

    const recordsAfterPagingAndSorting = () => {
        return stableSort(filterFn.fn(records), getComparator(order, orderBy))
    }
    return{
        TblContainer,
        TblHead,
        recordsAfterPagingAndSorting
    }
}