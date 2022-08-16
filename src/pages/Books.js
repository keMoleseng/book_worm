import PageHeader from '../components/PageHeader';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Box } from '@mui/material';
import BookForm from '../pages/BookForm';

export default function Books() {
    return(   
            <Box component="div" 
                sx={{
                paddingLeft: "320px",
                width: "100%",
                backgroundColor: "beige"
                }}  
            >
                <PageHeader 
                    title="Heading"
                    subtitle="Sub-heading"
                    icon={<LibraryBooksIcon />}
                />  
                <BookForm /> 
            </Box>     
    )
}