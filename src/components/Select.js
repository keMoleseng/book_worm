import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material';

export default function Select(props) {
    const {label, value, onChange, items, options, name} = props;

    return (
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                value={value}
                name={name}
                label={label}
                size='small'
                
            >
                <MenuItem value="">None</MenuItem>
                {options.map(option => (
                    <MenuItem value={option.id} key={option.id}>
                        {option.title}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    )
}