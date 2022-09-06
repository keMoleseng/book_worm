import PageHeader from "../components/PageHeader";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { Box, InputAdornment, Paper, TableBody, TableCell, TablePagination, TableRow, Toolbar } from "@mui/material";
import useTable from "../components/useTable";
import { useState } from "react";
import * as bookServices from '../services/book.service';
import Controls from "../components/Controls";
import SearchIcon from '@mui/icons-material/Search';
import EmptyList from '../components/EmptyList';

const headCells = [
    {id: 'title', label: 'Title'},
    {id: 'author', label: 'Author'},
    {id: 'pageNo', label: 'Page Number'},
    {id: 'actions', label: 'Completed', disableSorting: true}
]

export default function Bookmarks(props) {
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

    const addToCompleted = data => {
       bookServices.addToComplete(data);
       setRecords(bookServices.getAllBooks())
    }

    const handleSearch = e => {
        const { value } = e.target;
        setFilterFn({
            fn: items => {
                if(value === '') return items;
                else return items.filter(x => x.title.toLowerCase().includes(value))
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

    return (
        <Box component="div" 
        sx={{
        paddingLeft: "320px",
        width: "100%",
        backgroundColor: "beige",
        height: '90vh'
        }}
    >
        <PageHeader
            title="Bookmarks"
            subtitle="Sub-heading"
            icon={<BookmarksIcon />}
        />

        <Paper
            sx={{
                margin: (theme) => theme.spacing(5),
                padding: (theme) => theme.spacing(3)
            }}
        >
            {records.filter(x => !x.readComplete).length > 0 ?
                <>
                    <Toolbar>
                        <Controls.Input 
                            label='Search Book'
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
                            {recordsAfterPagingAndSorting()
                            .filter(record => !record.readComplete && record.pageNo !== "0")
                            .slice(page*rowsPerPage, (page+1)*rowsPerPage)
                            .map(record => 
                                (
                                <TableRow key={record.id}>
                                    <TableCell>{record.title}</TableCell>
                                    <TableCell>{record.author} </TableCell>
                                    <TableCell>{record.pageNo}</TableCell>
                                    <TableCell>
                                            <Controls.Checkbox 
                                                onChange={() => addToCompleted(record)}    
                                            />
                                    </TableCell>
                                </TableRow>
                                )
                            )}
                        </TableBody>
                </TblContainer>
                <TablePagination
                        component='div'
                        count={records.filter(record => !record.readComplete).length}
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