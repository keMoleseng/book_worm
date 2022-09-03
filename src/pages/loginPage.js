import { Box, Paper, Typography } from "@mui/material";
import Controls from '../components/Controls';
import LockIcon from '@mui/icons-material/Lock';
import { Form } from '../components/useForm';
import Footer from "../components/Footer";
import styled from "@emotion/styled";

export default function Login() {
   
    return(
        <Box compnent='div'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "beige",
                height: '100vh'  
            }}
        >
            <Text>This login form does not use real login details.</Text>
            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '50%',
                    paddingTop: (theme) => theme.spacing(2),
                    paddingBottom: (theme) => theme.spacing(8),
                    paddingLeft: (theme) => theme.spacing(5.5),
                    paddingRight: (theme) => theme.spacing(5.5)
                }}
            >
                
                <LockIcon fontSize="small" />
                <Typography variant="h6">
                        Log In
                </Typography>
                <Form
                    action='/home'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '130%',
                        marginTop: (theme) => theme.spacing(1.5)
                    }}
                >
                <Controls.Input 
                    label='Username'
                    variant='standard'
                    type='text'
                    required
                />
                <Controls.Input 
                    label='Password'
                    variant='standard'
                    type='password'
                    required
                /> 
                <Controls.Checkbox 
                    label='Remember me'
                />
                
                    <Controls.Button 
                        text='Login'
                        type='submit'
                    />
                
                </Form>
            </Paper>
            <Footer />
        </Box>
    )
}

const Text = styled.p`
    font-size: 0.6rem
`