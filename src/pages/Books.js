import PageHeader from '../components/PageHeader';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Box, InputAdornment, ListItem, Paper, TableBody, TableCell, TableRow, Toolbar } from '@mui/material';
import BookForm from '../pages/BookForm';
import useTable from '../components/useTable';
import * as bookServices from '../services/book.service'
import { useState } from 'react';
import Controls from '../components/Controls';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Popup from '../components/Popup';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

const headCells = [
    { id: 'title', label: 'Title' }, 
    { id: 'author', label: 'Author' }, 
    { id: 'publisher', label: 'Publisher' },
    { id: 'genre', label: 'Genre' },
    { id: 'year', label: 'Year' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]

export default function Books() {
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(bookServices.getAllBooks());
    const [filterfn, setFilterFn] = useState({ fn: items => {return items} });
    const [openPopup, setOpenPopup] = useState(false);

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

    const addOrEdit = (book, resetForm) => {
        if(book.id === 0)
            bookServices.insertBook(book);
        else
            bookServices.updateBook(book)
        resetForm();
        setRecordForEdit(null)
        setOpenPopup(false);
        setRecords(bookServices.getAllBooks())
    }

    const openInPopup = item => {
        setRecordForEdit(item);
        setOpenPopup(true);
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
                    <Toolbar
                        sx={{
                            justifyContent: 'space-between'
                        }}
                    >
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
                        <Controls.Button 
                            text='Add Book'
                            variant='outlined'  
                            onClick={() => {setOpenPopup(true); setRecordForEdit(null)}}
                            startIcon={<AddIcon />}
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
                                    <TableCell sx={{display: 'flex'}}>
                                        <Controls.ActionButton
                                            onClick={() => {openInPopup(record)}}
                                            sx={{ 
                                                minWidth: '0',
                                                margin: theme => theme.spacing(.25),
                                                padding: theme => theme.spacing(.2),
                                                backgroundColor: '#ADD8E6',
                                                color: "#333996"
                                            }}
                                        >
                                            <EditIcon fontSize='small' />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            sx={{ 
                                                minWidth: '0',
                                                margin: theme => theme.spacing(.25),
                                                padding: theme => theme.spacing(.2),
                                                backgroundColor: '#ffcccb',
                                                color: theme => theme.palette.error.dark
                                            }}
                                        >
                                            <CloseIcon fontSize='small' />
                                        </Controls.ActionButton>
                                    </TableCell>
                                    {/* <TableCell>{record.pageNo} </TableCell> */}
                                   
                                </TableRow>
                            ))}
                        </TableBody>
                    </TblContainer>
                     
                    <TblPagination />
                </Paper>
                <Popup 
                    title='Book Form'
                    openPopup={openPopup} 
                    setOpenPopup={setOpenPopup}>
                    <BookForm 
                        recordForEdit={recordForEdit}
                        addOrEdit={addOrEdit}/>
                </Popup>
            </Box>     
    )
}