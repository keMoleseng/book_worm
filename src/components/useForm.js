import { useState } from 'react';
import { Box } from "@mui/material";

export function useForm( initialValues, validateOnChange=false, validate ) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        })

        if(validateOnChange)
            validate({[name]: value})
    }

    const resetForm = () => {
        setValues(initialValues)
        setErrors({})
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleChange,
        resetForm
    }
}

export function Form(props) {
    const { children, ...other } = props;

    return (
        <Box component='form'
            autoComplete='off'
            { ...other }
        >
            { children }
        </Box>
    )
}