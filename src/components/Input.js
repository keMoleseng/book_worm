import { TextField } from '@mui/material';

export default function Input(props) {
    const { error=null, label, type, onChange, variant, value, name, ...other } = props; 
    return (
        <TextField 
            label={label}
            type={type}
            size="small"
            name={name}
            value={value}
            onChange={onChange}
            variant= {variant ? variant : `outlined`}
            {...other}
            {...(error && {error:true, helperText:error})}
        />
    )
}