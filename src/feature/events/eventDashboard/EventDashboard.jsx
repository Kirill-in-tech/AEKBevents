import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';
import { sampleData } from '../../../app/api/sampleData';

export default function EventDashboard({ formOpen, setFormOpen, selectedEvent, selectEvent }) {

	const [events, setEvents] = useState(sampleData);

	function handleCreateEvent(event) {
		setEvents([...events, event])
	}
	
	function handleUpdateEvent(updatedEvent) {
		setEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e));
		selectEvent(null);
	}

	function handleDeleteEvent(eventId) {
		setEvents(events.filter(e => e.id !== eventId));
	}

	return (
		<Grid>

			<Grid.Column width={10}>
				<EventList 
					events={events} 
					selectEvent={selectEvent} 
					deleteEvent={handleDeleteEvent}/>
			</Grid.Column>

			<Grid.Column width={6}>
				{formOpen &&
					<EventForm
						setFormOpen={setFormOpen} 
						setEvents={setEvents} 
						selectedEvent={selectedEvent}
						createEvent={handleCreateEvent} 
						updateEvent={handleUpdateEvent}
						key={selectedEvent ? selectedEvent.id : null} />}
			</Grid.Column>

		</Grid>
	)
}