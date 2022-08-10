import { Box, Card, Paper, Typography }from '@mui/material';


export default function PageHeader(props) {
    const { icon, title, subtitle } = props
    return(
        <Paper elevation={0} square>
            <Box 
                component="div"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "32px"
                }}
            >
                <Card
                    sx={{
                        dsiplay: "inline-block",
                        padding: "16px"
                    }}
                >
                    {icon}
                </Card>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "10px"
                    }}
                >
                    <Typography variant="h6">
                        {title}
                    </Typography>
                    <Typography variant="subtitle2" >
                        {subtitle}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    )
}