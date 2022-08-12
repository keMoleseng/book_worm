import { Box, Grid } from '@mui/material';
import Controls from '../components/Controls';

const completed = [
    {id: "0", title: "Yes"},
    {id: "1", title: "No"}
];

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

export default function BookForm() {
    
    return (
            <Box component='form'
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
                    />
                    <Controls.Input 
                        label="Author"
                        type="text"
                        name="author"
                    />
                    <Controls.Input
                        label="Publisher"
                        type="text"
                        name="publisher"
                    />
                    </Grid>
                    <Grid item sm={6}
                        sx={{
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <Controls.Input 
                            label="Year Released"
                            type="text"
                            name="year"
                        />
                        <Controls.Select
                            label="Genre"
                            options={genres()}
                            value=''
                            name="genre"
                        />
                        <Controls.RadioGroup
                            title="Completed"
                            name="readComplete"
                            items={completed}

                        />
                        <Box component="div" sx={{display: "flex"}}>
                            <Controls.Button
                                text="Submit"
                                color="primary"
                            />    
                            <Controls.Button
                                text="Reset"
                                color="grey"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
    )
}