import React from 'react';
import { eventDetails } from '../data/symposiumData';
import edwardWallpaper from '../assets/images/poster-profile.jpg';
import edwardPortrait from '../assets/images/edward-sunglasses-new.jpg';

const TechnicalEvents = ({ onEventClick }) => {
    const data = eventDetails.technical;

    return (
        <section id="technical" className="section container">

            <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h2 className="fade-in" style={{ fontSize: '2.5rem', color: 'var(--text-main)', letterSpacing: '2px', marginBottom: '0.5rem' }}>KNOW THE GAME</h2>
                <h4 className="fade-in" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '4px' }}>and choose your battlefield</h4>
            </div>

            <div className="story-layout">
                {/* COLUMN 1: DESCRIPTION (Edward Wallpaper) */}
                <div className="story-col-1 edward-theme">
                    {/* Wallpaper & Overlays */}
                    <img src={edwardWallpaper} alt="Edward Wallpaper" className="edward-wallpaper" />
                    <div className="edward-overlay"></div>

                    {/* Content */}
                    <div className="content-z">
                        <h2 style={{ fontSize: '3rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{data.voice}</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
                            "{data.intro}"
                        </p>
                        <div style={{ marginTop: '2rem', width: '40px', height: '2px', backgroundColor: 'var(--text-muted)' }}></div>
                    </div>
                </div>

                {/* COLUMN 2: EVENTS & CHARACTER BOX */}
                <div className="story-col-2" style={{ flexDirection: 'row', gap: '2rem' }}>
                    <div className="col-2-grid" style={{ flex: 1 }}>
                        {data.events.map((event, idx) => (
                            <div
                                key={event.id}
                                className="event-card fade-in"
                                style={{
                                    background: 'rgba(5, 5, 5, 0.95)',
                                    border: '1px solid var(--border-dim)',
                                    padding: '2rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    animationDelay: `${idx * 0.1}s`,
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onClick={() => onEventClick(event)}
                                onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--text-muted)'}
                                onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-dim)'}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, width: '4px', height: '100%',
                                    backgroundColor: 'var(--text-muted)'
                                }} />
                                <span style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                    SYS.PROCESS.{String(idx + 1).padStart(3, '0')}
                                </span>
                                <h3 style={{ fontSize: '1.8rem', marginTop: '1rem', marginBottom: '0.5rem', color: '#fff' }}>{event.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{event.subtitle}</p>
                                <div style={{ marginTop: '2rem' }}>
                                    <button
                                        className="btn"
                                        style={{ width: '100%', color: 'var(--text-muted)', borderColor: 'var(--text-muted)' }}
                                    >
                                        Execute
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dedicated Character Container Box */}
                    <div className="character-box-wrapper fade-in">
                        <img src={edwardPortrait} alt="Edward Container Portrait" />
                        <div className="cutout-vignette"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnicalEvents;
