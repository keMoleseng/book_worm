import { Box } from "@mui/material";

export default function Form(props) {
    const { children, ...other } = props;

    return (
        <Box component='form'

        >
            { children }
        </Box>
    )
}