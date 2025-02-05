import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './Navbar.css'

export default function Navbar () {
    
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Alex Caplen Resume</Link>
            <ul>
                <CustomLink to="/project1">Project 1</CustomLink>
                <CustomLink to="/project2">Project 2</CustomLink>
                <CustomLink to="/project3">Project 3</CustomLink>
                
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}) {
    // const path = window.location.pathname
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}