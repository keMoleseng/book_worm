import PageHeader from '../components/PageHeader';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Box, InputAdornment, ListItem, Paper, TableBody, TableCell, TableRow, Toolbar } from '@mui/material';
import BookForm from '../pages/BookForm';
import useTable from '../components/useTable';
import * as booksServices from '../services/book.service'
import { useState } from 'react';
import Controls from '../components/Controls';
import SearchIcon from '@mui/icons-material/Search';

const headCells = [
    { id: 'title', label: 'Title' }, 
    { id: 'author', label: 'Author' }, 
    { id: 'publisher', label: 'Publisher' },
    { id: 'genre', label: 'Genre' },
    { id: 'year', label: 'Year' }  
]

export default function Books() {
    const [records, setRecords] = useState(booksServices.getAllBooks());
    const [filterfn, setFilterFn] = useState({ fn: items => {return items} })
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterfn);

    const handleSearch = e => {
        const target = e.target;
        setFilterFn({
            fn: items => {
                if(target.value === '')
                    return items;
                return items.filter(x => x.title.toLowerCase().includes(target.value))
            }
        })
        
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
                    title="Library"
                    subtitle="Your current book collection"
                    icon={<LibraryBooksIcon />}
                /> 
                <Paper
                    sx={{
                        margin: (theme) => theme.spacing(5),
                        padding: (theme) => theme.spacing(3)
                    }}
                >
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
                        <TableBody >
                            {recordsAfterPagingAndSorting().map(record => (
                                <TableRow key={record.id} >
                                    <TableCell >{record.title} </TableCell>
                                    <TableCell >{record.author} </TableCell>
                                    <TableCell >{record.publisher} </TableCell>
                                    <TableCell >{record.genre} </TableCell>
                                    <TableCell >{record.year} </TableCell>
                                    {/* <TableCell>{record.pageNo} </TableCell> */}
                                   
                                </TableRow>
                            ))}
                        </TableBody>
                    </TblContainer>
                    {/* <BookForm />  */}
                    <TblPagination />
                </Paper> 
            </Box>     
    )
}