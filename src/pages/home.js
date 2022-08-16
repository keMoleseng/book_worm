import { Box } from "@mui/material";
import PageHeader from "../components/PageHeader";
import HomeIcon from '@mui/icons-material/Home';
export default function Home() {
    return(
        <Box component="div" 
            sx={{
            paddingLeft: "320px",
            width: "100%",
            backgroundColor: "beige"
            }} 
        >
            <PageHeader 
                    title="Home"
                    subtitle="Sub-heading"
                    icon={<HomeIcon />}
                />
        </Box>
    )
}