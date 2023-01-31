import React, {useState} from "react";
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../feature/events/eventDashboard/EventDashboard';
import NavBar from '../../feature/navbar/NavBar';

function App() {
  
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
		setSelectedEvent(event);
		setFormOpen(true);
	}

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true)
  }

  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <EventDashboard 
          setFormOpen={setFormOpen} 
          formOpen={formOpen} 
          selectedEvent={selectedEvent} 
          selectEvent={handleSelectEvent}/>
      </Container>
    </>
  );
}

export default App;