import { Table, TableCell, TableHead, TablePagination, TableRow, TableSortLabel } from "@mui/material"
import { useState } from "react";

export default function useTable(records, headCells) {
    const pages = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
    const [order, setOrder] = useState();
    const [orderby, setOrderBy] = useState();

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
        return (
            <TableHead>
                <TableRow>
                    {
                        headCells.map(headCell => (<TableCell key={headCell.id}>
                            <TableSortLabel>
                                {headCell.label}
                            </TableSortLabel>
                        </TableCell>))
                    }
                </TableRow>
            </TableHead>
    )
    }

    const TblPagination = () => {
        const handleChangePage = (e, newPage) => {
            setPage(newPage)
        }
    
        const handleChangeRowsPerPage = e => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0)
        }

        return (
        <TablePagination
            component='div'
            count={records.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPageOptions={pages}
            rowsPerPage={rowsPerPage} 
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
}

    const recordsAfterPagingAndSorting = () => {
        return records.slice(page*rowsPerPage, (page+1)*rowsPerPage)
    }
    return{
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    }
}