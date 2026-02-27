import React, { useEffect, useState } from 'react';
import { eventDetails } from '../data/symposiumData';
import './Hero.css'; // We'll add some specific hero styles
import togetherImg from '../assets/images/together-intro.jpg';
import edwardPortrait from '../assets/images/edward-sunglasses.jpg';
import tylerPortrait from '../assets/images/tyler-pointing.jpg';

const Hero = () => {
    const [glitchActive, setGlitchActive] = useState(false);

    useEffect(() => {
        // Random glitch effect trigger
        const interval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 200);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section fade-in" style={{ backgroundImage: `url(${togetherImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(5,5,5,0.85)', zIndex: 1 }}></div>
            <div className="hero-content container">
                <h1 className={`hero-title ${glitchActive ? 'glitch-active' : ''}`} data-text={eventDetails.general.title}>
                    {eventDetails.general.title}
                </h1>
                <div className="hero-meta">
                    <p className="hero-date">{eventDetails.general.date}</p>
                    <p className="hero-host">{eventDetails.general.host}</p>
                </div>

                <div className="hero-about-section fade-in" style={{ maxWidth: '800px', margin: '0 auto 4rem auto', textAlign: 'left', padding: '2rem', background: 'rgba(0, 0, 0, 0.5)', border: '1px solid var(--border-dim)' }}>
                    <h2 style={{ color: 'var(--text-main)', marginBottom: '1.5rem', fontSize: '2rem', borderBottom: '1px solid var(--border-dim)', paddingBottom: '0.5rem' }}>ABOUT THE EVENT</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        REVOITZ 5.0 is the annual technical symposium organized by the Department of Information Technology, Jeppiaar Engineering College. This premier event brings together brilliant minds, innovative thinkers, and technology enthusiasts from across colleges to showcase their technical prowess, creative skills, and problem-solving abilities.
                    </p>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        With a perfect blend of technical and non-technical events, REVOITZ 5.0 offers a platform for students to compete, collaborate, and celebrate the spirit of innovation. From intense coding challenges to creative design competitions, from strategic gaming tournaments to investigative tech challenges - REVOITZ 5.0 has it all.
                    </p>
                </div>

                <div className="hero-narratives">
                    <div className="narrative edward-box">
                        <img src={edwardPortrait} alt="Edward Norton" style={{ width: '100%', height: '250px', objectFit: 'cover', objectPosition: 'top center', border: '2px solid var(--text-muted)', filter: 'grayscale(60%)', transition: 'all 0.4s ease', marginBottom: '1rem' }} className="hero-portrait" />
                        <h3 className="narrator-name" style={{ margin: 0, marginBottom: '1rem', borderBottom: '1px solid var(--border-dim)', paddingBottom: '0.5rem' }}>Edward</h3>
                        <p>"{eventDetails.general.aboutEdward}"</p>
                    </div>
                    <div className="narrative tyler-box">
                        <img src={tylerPortrait} alt="Brad Pitt" style={{ width: '100%', height: '250px', objectFit: 'cover', objectPosition: 'top center', border: '2px solid var(--accent-red)', filter: 'grayscale(20%) contrast(120%) sepia(30%) hue-rotate(320deg)', transition: 'all 0.4s ease', marginBottom: '1rem' }} className="hero-portrait" />
                        <h3 className="narrator-name" style={{ margin: 0, marginBottom: '1rem', borderBottom: '1px solid var(--accent-red-dim)', paddingBottom: '0.5rem' }}>Tyler Durden</h3>
                        <p>"{eventDetails.general.aboutTyler}"</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
