import Header from "./Header";
import Books from '../pages/Books';
import Sidebar from '../components/Sidebar';
import Favourites from '../pages/favourites';
import Home from '../pages/home';
import {Drawer, Link, Typography} from '@mui/material';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import {
    Routes,
    Route,
    Link as RouterLink,
    
  } from "react-router-dom";
import { Toolbar } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HomeIcon from '@mui/icons-material/Home';
import Bookmarks from "../pages/bookmarks";
import DoneIcon from '@mui/icons-material/Done';
import CompletedReads from "../pages/completed";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ToRead from "../pages/toRead";

const routes = [
    {label: 'home' , icon: <HomeIcon />},
    {label: 'library' , icon: <LibraryBooksIcon />},
    {label: 'bookmarks' , icon: <BookmarksIcon />},
    {label: 'completed' , icon: <DoneIcon />},
    {label: 'toRead' , icon: <FormatListBulletedIcon />},
    {label: 'favourites' , icon: <FavoriteIcon />}
]

export default function MainLayout() {
    return(
        <>  
            <Drawer
                sx={{
                    width: '320px',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                      width: '320px',
                      boxSizing: 'border-box',
                      backgroundColor: 'darkolivegreen',
                      height: '100%'
                    },
                  }}
                variant='permanent'
                anchor='left'
            >
                <Toolbar />
                <List>
                    {routes.map((route, i) => (
                        <ListItem key={i}>
                        <ListItemButton
                            sx={{
                                '& a': {
                                    color: 'snow',
                                    textDecoration: 'none'
                                },
                                '& .MuiListItemIcon-root': {
                                    color: 'snow'
                                }
                            }}
                        >
                            <ListItemIcon>
                                {route.icon}
                            </ListItemIcon>
                             <RouterLink to={`/${route.label}`}>
                                {route.label === 'toRead' ? 'To Read' : route.label[0].toUpperCase()+route.label.slice(1)}
                            </RouterLink> 
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </Drawer>
            <Header />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/favourites' element={<Favourites />} />
                <Route path='/library' element={<Books />}  />
                <Route path='/bookmarks' element={<Bookmarks />}  />
                <Route path='/completed' element={<CompletedReads />}  />
                <Route path='/toRead' element={<ToRead />}  />
            </Routes>
            
        </>
    )
}
