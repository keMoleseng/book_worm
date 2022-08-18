import { useState } from 'react';
import { Box } from "@mui/material";

export function useForm( initialValues ) {
    const [values, setValues] = useState(initialValues);
    const handleChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        setValues,
        handleChange
    }
}

export function Form(props) {
    const { children, ...other } = props;

    return (
        <Box component='form'
            { ...other }
        >
            { children }
        </Box>
    )
}