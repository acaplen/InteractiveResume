import './ContactInfo.css';

export default function ContactInfo() {
    return (
        <div className="contact-details">
            <h1>Contact Information</h1>
            <div className="detail-row">
                <h2>Email:</h2>
                <p>acaplen@gmail.com</p>
            </div>
            <div className="detail-row">
                <h2>Phone:</h2>
                <p>(321) 287-9254</p>
            </div>
        </div>
    );
}
