import { Box, Grid } from '@mui/material';
import { Form, useForm } from '../components/useForm';
import Controls from '../components/Controls';
import { useState } from 'react';

const genres = () => ([
    {id: '0', title: 'Fantasy'},
    {id: '1', title: 'Sci-Fi'},
    {id: '2', title: 'Mystery'},
    {id: '3', title: 'Thriller'},
    {id: '4', title: 'Romance'},
    {id: '5', title: 'Western'},
    {id: '6', title: 'Contemporary'},
    {id: '7', title: 'Non-fiction'},
    {id: '8', title: 'Other'}
])

const initialValues = {
    title: "",
    author: "",
    publisher: "",
    year: "",
    genre: "",
    readComplete: false,
    pageNo: ''
}

export default function BookForm() {
    const {
        values,
        setValues,
        handleChange
    } = useForm(initialValues)
    
    return (
            <Form
                sx={{
                    "& .MuiFormControl-root": {
                    margin: (theme) => theme.spacing(1),
                    width: "80%"
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
                        required
                    />
                    <Controls.Input 
                        label="Author"
                        type="text"
                        name="author"
                        value={values.author}
                        onChange={handleChange}
                        required
                    />
                    <Controls.Input
                        label="Publisher"
                        type="text"
                        name="publisher"
                        value={values.publisher}
                        onChange={handleChange}
                    />
                    <Controls.Input 
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
                            options={genres()}
                            value={values.genre}
                            name="genre"
                            onChange={handleChange}
                        />
                         <Controls.Input 
                            label="Current Page"
                            type="text"
                            name="pageNo"
                            value={values.pageNo}
                            onChange={handleChange}
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
                                color="primary"
                                sx={{
                                    marginLeft: theme => theme.spacing(1)
                                }}
                            />    
                            <Controls.Button
                                text="Reset"
                                color="grey"
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