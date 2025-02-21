import './Project1.css';
import BitbucketIcon from "./../assets/Bitbucket.png";

export default function Project1() {
    return(
        <div className='home-container'>
        
            <h1>FSU Projects:</h1>
            <div className="h2-container">
                <h2>LIS4369 - Extensible Enterprise Solutions (Python and R)</h2>
                <h2 className="date">
                    Fall 2024
                </h2>
            </div>
            
            <h3>
                This was a course where I created various smaller projects. Below if a brief summary of what I did. For more of the details, code, and images please <a href="https://bitbucket.org/arc21a/lis4369/src/main/" target="_blank" rel="noopener noreferrer" className="button-link">
                        click here
                    </a>
            </h3>

            <ul>
                <li>Created various python applications including a Payroll Calculator, Painting Cost Estimator, and some data analysis as well.</li>
                <li>Became familiar with IDLE, Jupyter Notebook, Anaconda, and python environments.</li>
                <li>Learned to use R for data analysis and visualization.</li>
                <li>Became familiar using R Studio.</li>
            </ul>

            <div className="h2-container">
                <h2>LIS4381 - Mobile Web Application Development</h2>
                <h2 className="date">
                    Fall 2024
                </h2>
            </div>
            
            <h3>
            This was a course where I worked on multiple small and larger projects. Below if a brief summary of what I did. For more of the details, code, and images please <a href="https://bitbucket.org/arc21a/lis4381/src/main/" target="_blank" rel="noopener noreferrer" className="button-link">
                        click here
                    </a>
            </h3>

            <ul>
                <li>Native Android mobile app development</li>
                <li>Mobile friendly website development</li>
                <li>Database creation and connection to web application</li>
                <li>Various Java application in the weekly skill sets</li>
            </ul>
        
        </div>
    )
}