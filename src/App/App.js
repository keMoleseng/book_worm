import './App.css';
import Books from '../pages/Books';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Box , CssBaseline} from '@mui/material';


function App() {
  return (
    <>
      <Sidebar className="sidebar"/>
      <Box component="div" 
        sx={{
          paddingLeft: "320px",
          width: "100%",
          backgroundColor: "beige"
        }}
      >
        <Header />
        <Books />  
      </Box>
      <CssBaseline sx={{ height: "100%"}} />
    </>
  );
}

export default App;
