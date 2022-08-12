import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup } from "@mui/material";

export default function RadioGroup(props) {
    const { title, label, items, value, name, onChange } = props;

    return (
        <FormControl>
            <FormLabel>{title}</FormLabel>
            <MuiRadioGroup
                name={name}
                row
                // value={value}
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