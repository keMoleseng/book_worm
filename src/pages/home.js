import { Box, Grid } from "@mui/material";
import PageHeader from "../components/PageHeader";
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';  
import BookmarksIcon from '@mui/icons-material/Bookmarks'; 
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'; 
import DoneIcon from '@mui/icons-material/Done';   
import FavoriteIcon from '@mui/icons-material/Favorite';     
import { useState, useEffect } from 'react';      
import * as bookServices from '../services/book.service';
import Card from '../components/Card';
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";

export default function Home() {   
    const [countLibrary, setCountLibrary] = useState(0);
    const [countBookmark, setCountBookmark] = useState(0);
    const [countReadList, setCountReadList] = useState(0);
    const [countComplete, setCountComplete] = useState(0);
    const [records, setRecords] = useState(bookServices.getAllBooks());

    
    useEffect(() => {
        let timeout = setTimeout(() => {
            if(records.length > countLibrary)
                setCountLibrary(countLibrary + 1)
            else if (records.length === countLibrary)
                clearTimeout(timeout)
        }, 250); 

    })

    useEffect(() => {
        let filtered = records.filter(x => !x.readComplete)
        let timeout = setTimeout(() => {
            if(filtered.length > countBookmark)
                setCountBookmark(countBookmark + 1)
            else if (filtered.length === countBookmark)
                clearTimeout(timeout)
        }, 250); 

    })

    useEffect(() => {
        let filtered = records.filter(record => record.pageNo === '0' || record.pageNo === '');
        let timeout = setTimeout(() => {
            if(filtered.length > countReadList)
                setCountReadList(countReadList + 1)
            else if (filtered.length === countReadList)
                clearTimeout(timeout)
        }, 250); 

    })

    useEffect(() => {
        let filtered = records.filter(x => x.readComplete);
        let timeout = setTimeout(() => {
            if(filtered.length > countComplete)
                setCountComplete(countComplete + 1)
            else if (filtered.length === countComplete)
                clearTimeout(timeout)
        }, 250); 

    })

    return(
        <Box component="div" 
            sx={{
                paddingLeft: "320px",
                width: "100%",
                backgroundColor: "beige",
                height: '90vh',
                flexGrow: 1
            }} 
        >
            <PageHeader 
                    title="Home"
                    subtitle="Your stats"
                    icon={<HomeIcon />}
            />
            <Grid container 
            spacing={{ xs: 2, md: 3 }} 
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{padding: theme => theme.spacing(3)}}
             >
                <Grid item xs={2} sm={4} md={4} >
                    <Card 
                        title='Your current collection'
                        icon={<LibraryBooksIcon fontSize='medium' />}
                        count={countLibrary}
                    />
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Card 
                        title='Your current bookmarks'
                        icon={<BookmarksIcon fontSize='medium' />}
                        count={countBookmark}
                    />
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Card 
                        title='Your current to read list'
                        icon={<FormatListBulletedIcon fontSize='medium' />}
                        count={countReadList}
                    />
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Card 
                        title='Your completed reads list'
                        icon={<DoneIcon fontSize='medium' />}
                        count={countComplete}
                    />
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Card 
                        title='Your favourites'
                        icon={<FavoriteIcon fontSize='medium' />}
                        count={countLibrary}
                    /> 
                </Grid>
            </Grid>
        </Box>
    )
}