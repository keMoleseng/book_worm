import PageHeader from '../components/PageHeader';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export default function Books() {
    return(   
            <PageHeader 
                title="Heading"
                subtitle="Sub-heading"
                icon={<LibraryBooksIcon />}
            />        
    )
}