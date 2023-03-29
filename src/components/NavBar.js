import {Link} from 'react-router-dom';

function NavBar () {
    return (
        <nav className="nav">
            <Link to='/'>
                <div>
                    HOME
                </div>
            </Link>
            <Link to='/stocks'>
                <div>
                    STOCKS
                </div>
            </Link>
            <Link to='/about'>
                <div>
                    ABOUT
                </div>
            </Link>
        </nav>
    )
}

export default NavBar;