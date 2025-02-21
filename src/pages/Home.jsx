import React from 'react';
import resumePdf from '../assets/AlexCaplenResume.pdf';  // Make sure to adjust the path if needed
import './Home.css';

export default function Home() {
    
    const handleDownloadClick = () => {
        console.log("Button clicked!");
    };

    return (
        <div className="home-container">
            <h1>Career Objective:</h1>
            <h3>Aspiring Software Developer with a strong foundation in application development and database management. Passionate about building efficient, scalable, and user-friendly applications. Seeking an opportunity to contribute to innovative projects while continuously learning and growing as a developer.</h3>
            
            <h1>Education:</h1>
            <div className="h2-container">
                <h2>Florida State University</h2>
                <h2 className="date">May 2025</h2>
            </div>
            <h3>Bachelor of Science in Information Technology</h3>
            <h3>Minor in Computer Science</h3>
            <h3>GPA: 3.8</h3>
            
            <h1>Professional Experience:</h1>
            <div className="h2-container">
                <h2>Strategic Technology Intern</h2>
                <h2 className="date">May 2024 - Ongoing</h2>
            </div>
            <h3>HNTB, Tallahassee, FL</h3>
            <ul>
                <li>Built a database to help track all deployed technologies by the Florida Department of Transportation (FDOT) using Azure Data Studio.</li>
                <li>Assisted in front-end development for both a private web app used by FDOT employees and a public app for the general public.</li>
                <li>Developed multiple SharePoint web applications for internal use using Power BI, Power Apps, Power Automate, and Power Fx.</li>
                <li>Automated the data entry process for a database tracking EV charging stations across Florida using Snowflake and PowerShell scripting.</li>
            </ul>

            <div className="h2-container">
                <h2>United States Department of State Intern</h2>
                <h2 className="date">Sep. 2023 - May 2024</h2>
            </div>
            <h3>Virtual Student Federal Service Program for the US Embassy, London, UK</h3>
            <ul>
                <li>Created a detailed development plan for an AI-powered app to summarize diplomatic messages for US embassies.</li>
                <li>Developed the front-end prototype for the diplomatic messages app in React.</li>
                <li>Assisted in developing a system to track shipments of personal belongings for members of the foreign service.</li>
                <li>Collaborated with a team of students from across the country to support the London team.</li>
            </ul>

            <div className="h2-container">
                <h2>Monitor Technician</h2>
                <h2 className="date">Oct. 2021 - May 2022</h2>
            </div>
            <h3>Tallahassee Memorial Hospital, Tallahassee, FL</h3>
            <ul>
                <li>Monitored EKG rhythms and cameras in patient rooms to ensure safety.</li>
                <li>Reviewed daily EKG histories to detect any concerning features.</li>
                <li>Communicated with care teams during shift exchanges to update on patient status.</li>
                <li>Performed the duties of the floor secretary after visitation hours.</li>
            </ul>

            <div className="h2-container">
                <h2>Student Assistant</h2>
                <h2 className="date">Sep. 2020 - May 2021</h2>
            </div>
            <h3>Orlando Regional Medical Center, Orlando, FL</h3>
            <ul>
                <li>Shadowed healthcare professionals across various departments.</li>
                <li>Trained in performing EKG testing and analyzing results.</li>
                <li>Assisted in patient assessments in isolation rooms during COVID-19.</li>
            </ul>

            <h1>Technical Skills:</h1>
            <ul>
                <li>Application Development: Java, Python, PHP, Angular, React, JavaScript, TypeScript, Bash, PowerShell, R, Android Studio, and GDScript.</li>
                <li>Database Management: MySQL, Transact-SQL, SQL Server Management Studio, Azure Data Studio, MySQL Workbench, and Snowflake.</li>
                <li>Project Management Tools: Jira, Trello, Azure DevOps.</li>
                <li>SharePoint Development: Power BI, Power Automate, Power Apps, Power Fx.</li>
            </ul>

            <div className="download-section">
            <a 
                    href={resumePdf} 
                download="AlexCaplenResume.pdf" 
                className="download-link"
                onClick={handleDownloadClick}
            >
                Click here to download my resume (PDF)
            </a>
            
            </div> 
        </div>
    );
}
