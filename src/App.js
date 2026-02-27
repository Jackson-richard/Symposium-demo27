import React, { useState } from 'react';
import Hero from './components/Hero';
import TechnicalEvents from './components/TechnicalEvents';
import NonTechnicalEvents from './components/NonTechnicalEvents';
import EventModal from './components/EventModal';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    document.body.style.overflow = 'hidden';
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="App">
      <Hero />
      <main>
        <TechnicalEvents onEventClick={handleEventClick} />
        <NonTechnicalEvents onEventClick={handleEventClick} />
      </main>
      <Footer />
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={closeEventModal} />
      )}
    </div>
  );
}

export default App;
