import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './Navbar.css'
import linkedinIcon from "./assets/LinkedIn.png";
import BitbucketIcon from "./assets/Bitbucket.png";
import headshot from "./assets/headshotIcon512.png"

export default function Navbar () {
    
    return (
        <nav className="nav">
            
            <Link to="/InteractiveResume/" className="site-title">Alex Caplen</Link>
            <ul>
                <CustomLink to="/InteractiveResume/project1">FSU Projects</CustomLink>
                <CustomLink to="/InteractiveResume/project2">Work Projects</CustomLink>
                <CustomLink to="/InteractiveResume/ContactInfo">Contact</CustomLink>
                <li>
                    <a href="https://www.linkedin.com/in/alex-caplen" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" width="30" height="30" />
                    </a>
                </li>
                <li>
                    <a href="https://bitbucket.org/arc21a/homepage/src/main/" target="_blank" rel="noopener noreferrer">
                        <img src={BitbucketIcon} alt="Bitbucket" width="30" height="30" />
                    </a>
                </li>
                <li>
                    <Link to="/InteractiveResume/" className="site-title">
                        <img className='headshot' src={headshot} alt="Description of image" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}) {
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