import { Button } from "@mui/material";

const btnColor = {
    secondary: {
        backgroundColor: theme => theme.palette.primary.light,
        '& .MuiButton-label': {
            color: theme => theme.palette.secondary.main
        }
    },
    primary: {
        backgroundColor: theme => theme.palette.primary.light,
        '& .MuiButton-label': {
            color: theme => theme.palette.primary.main
        }
    }
}

export default function ActionButton(props) {
    const { sx, children, onClick } = props;

    return(
        <Button
            onClick={onClick}
            sx={sx}
        >
            {children}
        </Button>
    )
}