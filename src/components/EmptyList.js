import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Box, Typography } from '@mui/material';

export default function EmptyList() {
    return (
        <Box component='div' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
            <QuestionMarkIcon sx={{fontSize: '150px'}}/>
            <Typography variant='subtitle2'>This list is empty!</Typography>
        </Box>
    )
}