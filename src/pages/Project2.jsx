import './Project2.css';
import BitbucketIcon from "./../assets/Bitbucket.png";
import TTHome from "./../assets/TechTrackerHome.png";
import TTMap from "./../assets/TechTrackerMap.png";
import TTDevices from "./../assets/TechTrackerDeviceCategories.png";
import TTMCSAW from "./../assets/TechTrackerMCSAWEquipment.png";

export default function Project2() {
    return(
        <div className='home-container'>
        
            <h1>HNTB Project Contributions:</h1>


            <div className="h2-container">
                <h2>FDOT TechTracker (under development)</h2>
                
                <h2 className="date">
                    August 2024 - Ongoing
                </h2>
            </div>

            {/*
            <img src={TTHome} alt="Bitbucket"  />
            <img src={TTMap} alt="Bitbucket"  />
            <img src={TTDevices} alt="Bitbucket"   />
            <img src={TTMCSAW} alt="Bitbucket"  />
            */}

            
            
            <h3>
                The TechTracker is a public facing site where anyone can come to see and learn all the different technologies deployed by the Florida Department Of Transportation (FDOT). On the public site, I have been managing the database that holds the locations for all of the devices as well as adding all the descriptions, images, and map symbols. I also helped in the design of the private tool used to add and manage the devices seen on this site. To see the site: <a href="https://fdottechtracker.hntb.com/home" target="_blank" rel="noopener noreferrer" className="button-link">
                        click here
                    </a> Just keep in mind this is still under development and may change in the future.
            </h3>

            <div className="image-gallery">
                <figure>
                    <img src={TTHome} alt="TechTracker Home" className="styled-image" />
                    <figcaption>TechTracker Home</figcaption>
                </figure>
                <figure>
                    <img src={TTMap} alt="TechTracker Map" className="styled-image" />
                    <figcaption>TechTracker Map</figcaption>
                </figure>
            </div>

            <div className="image-gallery">
                <figure>
                    <img src={TTDevices} alt="TechTracker Device Categories" className="styled-image" />
                    <figcaption>TechTracker Device Categories</figcaption>
                </figure>
                <figure>
                    <img src={TTMCSAW} alt="TechTracker MCSAW Equipment" className="styled-image" />
                    <figcaption>TechTracker MCSAW Equipment</figcaption>
                </figure>
            </div>

            {/*
            <div className="h2-container">
                <h2>LIS4381 - Mobile Web Application Development</h2>
                <h2 className="date">
                    Fall 2024
                </h2>
            </div>
            
            <h3>
            This was a course where I worked on multiple small and larger projects. Below if a brief summary of what I did. For more of the details, code, and images please <a href="https://bitbucket.org/arc21a/lis4381/src/main/" target="_blank" rel="noopener noreferrer">
                        click here<img src={BitbucketIcon} alt="Bitbucket" width="30" height="30" />
                    </a>
            </h3>

            <ul>
                <li>Native Android mobile app development</li>
                <li>Mobile friendly website development</li>
                <li>Database creation and connection to web application</li>
                <li>Various Java application in the weekly skill sets</li>
            </ul>
            */}
        
        </div>
    )
}