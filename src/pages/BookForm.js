import { Box, Grid, TextField } from '@mui/material';
import { Form, useForm } from '../components/useForm';
import Controls from '../components/Controls';
import * as bookServices from '../services/book.service'
import { useEffect } from 'react';


const initialValues = {
    id: 0,
    title: "",
    author: "",
    publisher: "",
    year: "",
    genreId: "",
    readComplete: true,
    pageNo: '',
    isFavourite: false
}

export default function BookForm(props) {
    const { addOrEdit, recordForEdit } = props;

    const validate = (fieldValues = values) => {
        let temp = {...errors};
        if('title' in fieldValues)
            temp.title = fieldValues.title ? '' : 'Please fill out the title of the book.'
        if('author' in fieldValues)
            temp.author = fieldValues.author ? '' : 'Please fill out the author of the book.'
        if('pageNo' in fieldValues)
            temp.pageNo = !fieldValues.readComplete && !fieldValues.pageNo? 'Please fill out last page read.' : ''

        setErrors({
            ...temp
        })

        if(fieldValues === values)
            return Object.values(temp).every(x => x === '');
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleChange,
        resetForm
    } = useForm(initialValues, true, validate)
    
    const handleSubmit = e => {
        e.preventDefault();

        if(validate()){
            addOrEdit(values, resetForm);
            
        }
    }

    useEffect(() => {
        if(recordForEdit != null)
        setValues({
            ...recordForEdit
        })
    }, [recordForEdit])
    
    console.log(values)
    return (
            <Form
                onSubmit={handleSubmit}
                sx={{
                    "& .MuiFormControl-root": {
                    margin: (theme) => theme.spacing(1),
                    
                    }
                }}
            >
                <Grid container
                   
                >
                    <Grid item sm={6}
                        sx={{
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                    <Controls.Input
                        label="Title"
                        type="text"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        error={errors.title}
                    />
                    <Controls.Input 
                        label="Author"
                        type="text"
                        name="author"
                        value={values.author}
                        onChange={handleChange}
                        error={errors.author}
                    />
                    <Controls.Input
                        label="Publisher"
                        type="text"
                        name="publisher"
                        value={values.publisher}
                        onChange={handleChange}
                    />
                    <Controls.DatePicker 
                        label="Year Released"
                        type="text"
                        name="year"
                        value={values.year}
                        onChange={handleChange}
                    />
                   
                    </Grid>
                    <Grid item sm={6}
                        sx={{
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >   
                        <Controls.Select
                            label="Genre"
                            options={bookServices.getGenres()}
                            value={values.genreId}
                            name="genreId"
                            onChange={handleChange}
                        />
                         <Controls.Input 
                            label="Current Page"
                            type="text"
                            name="pageNo"
                            value={values.pageNo}
                            onChange={handleChange}
                            error={errors.pageNo}
                        />
                        <Controls.Checkbox
                            label="Read Complete"
                            name="readComplete"
                            value={values.readComplete}
                            onChange={handleChange}
                            
                        />
                        <Box component="div" sx={{display: "flex"}}>
                            <Controls.Button
                                text="Submit"
                                type='submit'
                                color="primary"
                                sx={{
                                    marginLeft: theme => theme.spacing(1)
                                }}
                            />    
                            <Controls.Button
                                text="Reset"
                                color="grey"
                                onClick={resetForm}
                                sx={{
                                    marginLeft: theme => theme.spacing(1)
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Form>
    )
}