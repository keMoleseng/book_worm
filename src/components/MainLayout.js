import Header from "./Header";
import Books from '../pages/Books';
import Sidebar from '../components/Sidebar';
import Favourites from '../pages/favourites';
import Home from '../pages/home';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    
  } from "react-router-dom";

export default function MainLayout() {
    return(
        <>
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
            
        </>
    )
}