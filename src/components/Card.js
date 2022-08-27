import { Box, Card as MuiCard, CardContent, Grid, Typography } from "@mui/material";

export default function Card(props) {
    const { title, icon, count } = props;
    return (
        <MuiCard sx={{ maxWidth: '255px' }}>
            <CardContent>
                <Typography color="text.secondary" align='center'>{title}</Typography>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
                    {icon}
                     <Typography variant='h6' component='div' >{count}</Typography>
                </Box>
            </CardContent>
        </MuiCard>
    )
}