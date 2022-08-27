import {Checkbox as MuiCheckbox, FormControlLabel, FormControl} from '@mui/material';

export default function Checkbox(props) {
    const { label, onChange, name, value } = props;
    
    const changeToDefault = (name, value) => ({
        target: {
            name,  value
        }
    })

    return (
        <FormControl>
            <FormControlLabel 
                control={
                    <MuiCheckbox 
                    size="small"
                    onChange={e => onChange(changeToDefault(name, e.target.checked))}
                    checked={value}/>} 
                    label={label} 
            />
        </FormControl>
    )
}