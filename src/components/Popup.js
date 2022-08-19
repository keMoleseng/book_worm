import { Box, Dialog, DialogContent, DialogTitle, formHelperTextClasses, Typography } from "@mui/material";
import Controls from '../components/Controls'
import CloseIcon from '@mui/icons-material/Close';

export default function Popup(props) {
    const { title, children, openPopup, setOpenPopup } = props;
    return (
        <Dialog open={openPopup} 
            maxWidth="md"
            sx={{
                '& .MuiDialog-paper':{
                padding: (theme) => theme.spacing(1.5),
                position: 'absolute',
                top: (theme) => theme.spacing(5),
                width: '50%'
                }
            }}>
            <DialogTitle sx={{padding: (theme) => theme.spacing(.5)}}>
                <Box component='div' 
                    sx={{
                        display: 'flex'
                    }}
                >
                    <Typography variant='h6' component='div' sx={{flexGrow: '1'}}>
                        {title}
                    </Typography>
                    <Controls.ActionButton
                        sx={{ 
                            minWidth: '0',
                            margin: theme => theme.spacing(.5),
                            backgroundColor: '#ffcccb',
                            color: theme => theme.palette.error.dark
                        }}
                        onClick={() => setOpenPopup(false)}
                    >
                        <CloseIcon />
                    </Controls.ActionButton>
                </Box>
            </DialogTitle>
            <DialogContent dividers>
                { children }
            </DialogContent>
        </Dialog>
    )
}