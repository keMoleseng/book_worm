import { Alert, Snackbar } from "@mui/material";

export default function Notification(props) {
        const { notify, setNotify } = props;

        const handleClose = (e, reason) => {

            setNotify({
                ...notify,
                isOpen: false
            })
        }
    return(
        <Snackbar
            open={notify.isOpen}
            autoHideDuration={10000}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            sx={{
                marginTop: theme => theme.spacing(5.5)
            }}
            onClose={handleClose}
        >
            <Alert severity={notify.type}
            onClose={handleClose}>
                {notify.message}
            </Alert>
        </Snackbar>
    )
}