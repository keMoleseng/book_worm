import { Link } from 'react-router-dom';

export default function Sidebar(props) {
    const {className} = props
    return (
        <div className={className}>
            <Link to='/'>Home</Link>
            <Link to='/library'>Library</Link>
            <Link to='/favourites'>Favourites</Link>
        </div>
    )
}