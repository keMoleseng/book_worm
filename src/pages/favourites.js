import PageHeader from '../components/PageHeader';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/material'

export default function Favourites() {
    return(
        <Box component="div" 
            sx={{
            paddingLeft: "320px",
            width: "100%",
            backgroundColor: "beige"
            }}
        >
            <PageHeader
                title="Favourites"
                subtitle="Sub-heading"
                icon={<FavoriteIcon />}
            />
        </Box>
    )
}