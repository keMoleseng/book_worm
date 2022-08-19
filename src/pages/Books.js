import PageHeader from '../components/PageHeader';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Box, ListItem, Paper, TableBody, TableCell, TableRow } from '@mui/material';
import BookForm from '../pages/BookForm';
import useTable from '../components/useTable';
import * as booksServices from '../services/book.service'
import { useState } from 'react';

const headCells = [
    { id: 'title', label: 'Title' }, 
    { id: 'author', label: 'Author' }, 
    { id: 'publisher', label: 'Publisher' },
    { id: 'genre', label: 'Genre' },
    { id: 'year', label: 'Year' }  
]

export default function Books() {
    const [records, setRecords] = useState(booksServices.getAllBooks())
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells);

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