import PageHeader from '../components/PageHeader';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Box, Paper } from '@mui/material';
import BookForm from '../pages/BookForm';

export default function Books() {
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
                    title="Heading"
                    subtitle="Sub-heading"
                    icon={<LibraryBooksIcon />}
                /> 
                <Paper
                    sx={{
                        margin: (theme) => theme.spacing(5),
                        padding: (theme) => theme.spacing(3)
                    }}
                >
                    <BookForm /> 
                </Paper> 
            </Box>     
    )
}