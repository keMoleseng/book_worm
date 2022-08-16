import './App.css';
import Books from '../pages/Books';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Favourites from '../pages/favourites';
import Home from '../pages/home'
import { Box , CssBaseline} from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className='sidebar'>
        <Link to='/'>Home</Link>
        <Link to='/library'>Library</Link>
        <Link to='/favourites'>Favourites</Link>
      </div>
      
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/library' element={<Books />}  />
      </Routes>
      <CssBaseline sx={{ height: "100%"}} />
    </Router>
  );
}

export default App;
