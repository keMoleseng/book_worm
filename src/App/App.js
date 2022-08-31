import './App.css';
import MainLayout from '../components/MainLayout';
import {  CssBaseline} from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import Login from '../pages/loginPage';


function App() {
 
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />  
        <Route path='*' element={<MainLayout />} />
      </Routes>
      <CssBaseline sx={{ height: "100%"}} />
      
    </Router>
  );
  
}

export default App;
