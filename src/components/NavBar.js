import {Link} from "react-router-dom";



export function NavBar() {
    return(
        <nav>
            <ul style={{display: 'flex', listStyleType: 'none'}}>
                <li style={{marginRight: '15px'}}>
                    <Link to="/">Home</Link>
                </li>
                <li style={{marginRight: '15px'}}>
                    <Link to="about">About</Link>
                </li>
                <li style={{marginRight: '15px'}}>
                    <Link to="users">Users</Link>
                </li>
                <li style={{marginRight: '15px'}}>
                    <Link to="user">User</Link>
                </li>
                <li style={{marginRight: '15px'}}>
                    <Link to="contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}