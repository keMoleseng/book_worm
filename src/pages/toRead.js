import PageHeader from "../components/PageHeader";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Box, InputAdornment, Paper, TableBody, TableCell, TablePagination, TableRow, Toolbar } from "@mui/material";
import useTable from '../components/useTable';
import { useState } from "react";
import * as bookServices from '../services/book.service';
import Controls from "../components/Controls";
import SearchIcon from '@mui/icons-material/Search';
import EmptyList from "../components/EmptyList";

const headCells = [
    {id: 'title', label: 'Title'},
    {id: 'author', label: 'Author'},
    {id: 'publisher', label: 'Publisher'},
    {id: 'year', label: 'Year'}
]

export default function ToRead() {
    const [records, setRecords] = useState(bookServices.getAllBooks());
    const [filterFn, setFilterFn] = useState({ fn: items => {return items} });
    const pages = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

    const {
        TblContainer,
        TblHead,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        const { value } = e.target;
        setFilterFn({
            fn: items => {
                if( value === '') return items;
                else return items.filter(item => item.title.toLowerCase().includes(value))
            }
        })
    }

    const handleChangePage = (e, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = e => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0)
    }

    return(
        <Box component="div" 
                sx={{
                paddingLeft: "320px",
                width: "100%",
                backgroundColor: "beige",
                height: '90vh'
                }}  
        >
            <PageHeader
                title="To Read List"
                subtitle="Sub-heading"
                icon={<FormatListBulletedIcon />}
            />
            <Paper
                sx={{
                    margin: theme => theme.spacing(5),
                    padding: theme => theme.spacing(3)
                }}
            >
                {
                    records.filter(record => record.pageNo === '0' || record.pageNo === '' ).length > 0 ?
                <>
                    <Toolbar>
                        <Controls.Input 
                            label='Search book by title'
                            sx={{
                                width: '75%'
                            }}
                            InputProps={{
                                startAdornment:
                                (
                                    <InputAdornment position='start'>
                                        <SearchIcon fontSize='small' />
                                    </InputAdornment>
                                )
                            }}
                            onChange={handleSearch}
                        />
                    </Toolbar>
                    <TblContainer>
                        <TblHead />
                        <TableBody>
                            { recordsAfterPagingAndSorting()
                            .filter(records => records.pageNo === '0' || records.pageNo === '')
                            .slice(page*rowsPerPage, (page+1)*rowsPerPage)
                            .map(record => (
                                <TableRow key={record.id} >
                                    <TableCell>{record.title}</TableCell>
                                    <TableCell>{record.author}</TableCell>
                                    <TableCell>{record.publisher}</TableCell>
                                    <TableCell>{record.year.slice(0, 4)}</TableCell>
                                </TableRow>
                            )) }
                        </TableBody>
                    </TblContainer>
                    <TablePagination
                        component='div'
                        count={records.filter(record => record.pageNo === '0' || record.pageNo === '').length}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPageOptions={pages}
                        rowsPerPage={rowsPerPage} 
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </>
                : 
                <EmptyList />
                }
            </Paper>
        </Box>
    )
}