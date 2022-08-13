import { TextField } from '@mui/material';

export default function Input(props) {
    const { label, type, onChange, placeholder, value, name } = props; 
    return (
        <TextField 
            label={label}
            type={type}
            size="small"
            name={name}
            value={value}
            onChange={onChange}
            variant="outlined"
        />
    )
}