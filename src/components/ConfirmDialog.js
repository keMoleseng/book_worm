import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import Controls from "./Controls";
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';

export default function ConfirmDialog(props) {
    const { confirmDialog, setConfirmDialog } = props;
    return (
        <Dialog open={confirmDialog.isOpen}
            sx={{
                padding: (theme) => theme.spacing(2),
                position: 'absolute',
                top: (theme) => theme.spacing(5)
            }}
        >

            <DialogTitle
                sx={{
                    textAlign: 'center'
                }}
            >
                <IconButton disableRipple
                     sx={{
                        backgroundColor: '#ffcccb',
                        color: theme => theme.palette.error.dark,
                        '&:hover': {
                            backgroundColor: '#ffcccb',
                            cursor: 'defaut'
                        },
                        '&.MuiSvgIcon-root': {
                            fontSize: '8rem'
                        }
                    }}
                >
                    <NotListedLocationIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent
                sx={{
                    textAlign: 'center'
                }}
            >
                <Typography variant='h6'>
                    {confirmDialog.title}
                </Typography>
                <Typography variant='subtitle2'>
                    {confirmDialog.subtitle}
                </Typography>
            </DialogContent>
            <DialogActions
                sx={{
                    justifyContent: 'center'
                }}
            >
                <Controls.Button 
                    text='Cancel'
                    color='grey'
                    onClick={() => setConfirmDialog({...confirmDialog, isOpen: false})}
                />
                <Controls.Button
                    text='Confirm'
                    color='error'
                    onClick={confirmDialog.onConfirm}
                />
            </DialogActions>

        </Dialog>
    )
}