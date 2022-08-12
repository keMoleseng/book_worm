import { Button as MuiButton } from '@mui/material'

export default function Button(props) {
    const { color, text, name, value } = props;
    return (
        <MuiButton
            variant="contained"
            color={color}
        >
            {text}
        </MuiButton>
    )
}