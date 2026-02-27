import React from 'react';
import { eventDetails } from '../data/symposiumData';

const Footer = () => {
    const data = eventDetails.coordinators;

    return (
        <footer className="section container" style={{ borderTop: '1px solid var(--border-dim)', textAlign: 'center', paddingBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Hit Me If You Need To</h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', marginBottom: '4rem' }}>
                {data.students.map((student, idx) => (
                    <div key={idx} style={{ textAlign: 'left', borderLeft: '2px solid var(--accent-red)', paddingLeft: '1rem' }}>
                        <h4 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0' }}>{student.name}</h4>
                        <p style={{ color: 'var(--text-muted)', margin: 0 }}>{student.role}</p>
                        <p style={{ color: 'var(--accent-red)', margin: '0.5rem 0 0 0', fontFamily: 'var(--font-display)', letterSpacing: '1px' }}>
                            {student.phone}
                        </p>
                    </div>
                ))}
            </div>

            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', borderTop: '1px dotted var(--border-dim)', paddingTop: '2rem', fontFamily: 'var(--font-display)' }}>
                <p>REVOITZ 5.0 | {eventDetails.general.host}</p>
                <p style={{ marginTop: '0.5rem' }}>Do not talk about Revoitz outside of Revoitz.</p>
            </div>
        </footer>
    );
};

export default Footer;
