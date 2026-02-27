import React from 'react';
import './EventModal.css';

const EventModal = ({ event, onClose }) => {
    if (!event) return null;

    return (
        <div className="modal-overlay fade-in" onClick={onClose}>
            <div
                className={`modal-content ${event.type === 'technical' ? 'edward-modal' : 'tyler-modal'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="close-btn" onClick={onClose}>&times;</button>

                <h2 className="modal-title">{event.title}</h2>
                <h4 className="modal-subtitle">{event.subtitle}</h4>

                <div className="modal-tagline">
                    <em>"{event.tagline}"</em>
                </div>

                <div className="modal-section">
                    <h3>Description</h3>
                    <p>{event.description}</p>
                </div>

                <div className="modal-section rules-section">
                    <h3>Rules of Engagement</h3>
                    <ul>
                        {event.rules.map((rule, idx) => (
                            <li key={idx}>{rule}</li>
                        ))}
                    </ul>
                </div>

                <div className="modal-footer">
                    <span className="event-fee">Entry Fee: {event.fee}</span>
                    <button className="btn rsvp-btn" onClick={() => alert('Registration opens soon.')}>Register Now</button>
                </div>
            </div>
        </div>
    );
};

export default EventModal;
