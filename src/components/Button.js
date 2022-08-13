import { Button as MuiButton } from '@mui/material'

export default function Button(props) {
    const { color, text, name, value } = props;
    return (
        <MuiButton
            sx={{
                marginLeft: theme => theme.spacing(1)
            }}
            variant="contained"
            color={color}
        >
            {text}
        </MuiButton>
    )
}