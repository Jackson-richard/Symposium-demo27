import React from 'react';
import { eventDetails } from '../data/symposiumData';
import tylerWallpaper from '../assets/images/window-gun.jpg';
import tylerPortrait from '../assets/images/tyler-barcode.jpg';

const NonTechnicalEvents = ({ onEventClick }) => {
    const data = eventDetails.nonTechnical;

    return (
        <section id="non-technical" className="section container" style={{ borderTop: '1px solid var(--border-dim)' }}>

            <div className="story-layout" style={{ flexDirection: 'row-reverse' }}>
                {/* COLUMN 1: DESCRIPTION (Tyler Wallpaper) */}
                <div className="story-col-1 tyler-theme">
                    {/* Wallpaper & Overlays */}
                    <img src={tylerWallpaper} alt="Tyler Wallpaper" className="tyler-wallpaper" />
                    <div className="tyler-overlay"></div>

                    {/* Content */}
                    <div className="content-z" style={{ textAlign: 'right' }}>
                        <h2 style={{ fontSize: '3rem', color: 'var(--accent-red)', marginBottom: '1.5rem' }}>{data.voice}</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-main)', textAlign: 'left' }}>
                            "{data.intro}"
                        </p>
                        <div style={{ marginTop: '2rem', width: '40px', height: '2px', backgroundColor: 'var(--accent-red)', marginLeft: 'auto' }}></div>
                    </div>
                </div>

                {/* COLUMN 2: EVENTS & CHARACTER BOX */}
                <div className="story-col-2" style={{ flexDirection: 'row', gap: '2rem' }}>
                    {/* Dedicated Character Container Box */}
                    <div className="character-box-wrapper fade-in">
                        <img src={tylerPortrait} alt="Tyler Container Portrait" />
                        <div className="cutout-vignette"></div>
                    </div>

                    <div className="col-2-grid" style={{ flex: 1 }}>
                        {data.events.map((event, idx) => {
                            const chaoticTilt = idx % 2 === 0 ? '-1deg' : '1deg';

                            return (
                                <div
                                    key={event.id}
                                    className="event-card fade-in"
                                    style={{
                                        background: 'rgba(5, 5, 5, 0.95)',
                                        border: '1px solid var(--border-dim)',
                                        padding: '2rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                                        animationDelay: `${idx * 0.1}s`,
                                        position: 'relative',
                                        transform: `rotate(${chaoticTilt})`
                                    }}
                                    onClick={() => onEventClick(event)}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--accent-red)';
                                        e.currentTarget.style.transform = 'scale(1.02) rotate(0deg)';
                                        e.currentTarget.style.boxShadow = '5px 5px 0 var(--accent-red-dim)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border-dim)';
                                        e.currentTarget.style.transform = `rotate(${chaoticTilt})`;
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div style={{
                                        position: 'absolute',
                                        top: 0, right: 0, width: '4px', height: '100%',
                                        backgroundColor: 'var(--accent-red)'
                                    }} />
                                    <span style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-red)', fontSize: '0.9rem', fontWeight: 'bold' }}>
                                        FIGHT: 0{idx + 1}
                                    </span>
                                    <h3 style={{ fontSize: '1.8rem', marginTop: '1rem', marginBottom: '0.5rem', color: '#fff' }}>{event.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{event.subtitle}</p>
                                    <div style={{ marginTop: '2rem' }}>
                                        <button
                                            className="btn"
                                            style={{ width: '100%' }}
                                        >
                                            Step Into Ring Let's Go
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NonTechnicalEvents;
