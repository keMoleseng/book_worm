import PageHeader from "../components/PageHeader";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { Box, Paper, TableBody, TableCell, TableRow } from "@mui/material";
import useTable from "../components/useTable";
import { useState } from "react";
import * as bookServices from '../services/book.service';
import Controls from "../components/Controls";

const headCells = [
    {id: 'title', label: 'Title'},
    {id: 'author', label: 'Author'},
    {id: 'pageNo', label: 'Page Number'},
    {id: 'actions', label: 'Completed'}
]

export default function Bookmarks(props) {
    const [completedRead, setCompleteRead] = useState(null);
    const [records, setRecords] = useState(bookServices.getAllBooks());
    const {
        TblContainer,
        TblHead
    } = useTable(records, headCells);

    const addToCompleted = data => {
       bookServices.addToComplete(data);
       setRecords(bookServices.getAllBooks())
    }

    return (
        <Box component="div" 
        sx={{
        paddingLeft: "320px",
        width: "100%",
        backgroundColor: "beige"
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
           <TblContainer>
                <TblHead />
                <TableBody>
                    {records.map(record => 
                        record.readComplete ?
                        null
                        : (
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
        </Paper>
    </Box>
    )
}