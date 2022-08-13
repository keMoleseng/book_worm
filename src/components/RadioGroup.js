import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup } from "@mui/material";

export default function RadioGroup(props) {
    const { label, items, value, name, onChange } = props;

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup
                name={name}
                value={value}
                onChange={onChange}
                row
            >
                { items.map(item => (

                    <FormControlLabel 
                        key={item.id}
                        value={item.title}
                        control={<Radio />}
                        label={item.title}
                    />
                    
                    )
                )
                }
            </MuiRadioGroup>
        </FormControl>
    )
}