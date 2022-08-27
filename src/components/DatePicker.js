import { DatePicker as MuiDatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField'

export default function DatePicker(props) {
    const { onChange, name, value, label } = props;

    const convertDefaultParam =(name, value) => ({
        target: {
            name:name, value:value
        }
    })

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} >
            <MuiDatePicker 
                name={name}
                value={value}
                label={label}
                openTo="year"
                views={['year']}
                onChange={date => onChange(convertDefaultParam(name, date))}
                renderInput={(params) => <TextField {...params} /> }
            />
        </LocalizationProvider>
    )
}