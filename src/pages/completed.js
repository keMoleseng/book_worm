import DoneIcon from '@mui/icons-material/Done';
import PageHeader from '../components/PageHeader';
import {Box, InputAdornment, Paper, Tab, TablePagination, TableBody, TableCell, TableRow, Toolbar} from '@mui/material';
import useTable from '../components/useTable';
import * as bookServices from '../services/book.service';
import Controls from '../components/Controls';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import EmptyList from '../components/EmptyList';

const headCells = [
    {id: 'title', label: 'Title'},
    {id: 'author', label: 'Author'},
    {id: 'year', label: 'Year'}
]

export default function CompletedReads(){
    const [records, setRecords] = useState(bookServices.getAllBooks());
    const [filterFn, setFilterFn]  = useState({ fn: items => {return items} });
    const pages = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);


    const {
        TblContainer,
        TblHead,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        const target = e.target;
        setFilterFn({
            fn: items => {
                if(target.value === '') return items;
                else return items.filter(x => x.title.toLowerCase().includes(target.value));
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
                title="Completed"
                subtitle="You're finished reading these books"
                icon={<DoneIcon />}
            />
            <Paper
                sx={{
                    margin: (theme) => theme.spacing(5),
                    padding: (theme) => theme.spacing(3)
                }}
            >
                {
                    records.filter(record => record.readComplete).length > 0 ?
                    <>
                        <Toolbar>
                            <Controls.Input 
                                label='Search by title'
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
                                .filter(record => record.readComplete)
                                .slice(page*rowsPerPage, (page+1)*rowsPerPage)
                                .map(record => (
                                    <TableRow key={record.id}>
                                            <TableCell>{record.title}</TableCell>
                                            <TableCell>{record.author}</TableCell>
                                            <TableCell>{record.year.slice(0, 4)}</TableCell>
                                        </TableRow>
                                ))}
                            </TableBody>
                        </TblContainer>
                        <TablePagination
                            component='div'
                            count={records.filter(record => record.readComplete).length}
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