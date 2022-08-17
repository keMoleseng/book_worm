import {Checkbox, FormControlLabel, FormGroup} from '@mui/material';

export default function Checkbox(props) {
    const { label } = props;
    
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label={label} />
        </FormGroup>
    )
}