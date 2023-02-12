import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import { createId } from '@paralleldrive/cuid2';
import { useDispatch, useSelector } from 'react-redux';
import { updateEvent, createEvent } from '../eventActions';

export default function EventForm({ match, history }) {

  const dispatch = useDispatch();

  const selectedEvent = useSelector(state => state.event.events.find(event => event.id === match.params.id));

  const initialValues = selectedEvent ? selectedEvent : {
    title: '',
    category: 'culture',
    description: '',
    city: '',
    venue: '',
    date: ''
  }

  const [values, setValues] = useState(initialValues);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleFormSubmit() {
    if (selectedEvent) {
      dispatch(updateEvent({ ...selectedEvent, ...values }));
      history.push(`/events/${selectedEvent.id}`);
    }
    else {
      const newID = createId();
      dispatch(createEvent({ ...values, id: newID, hostedBy: 'Me', hostPhotoURL: '/assets/user.png', attendees: [] }));
      history.push(`/events/${newID}`);
    }
  }

  return (
    <Segment clearing>
      <Header textAlign='center' size='large' content={selectedEvent ? 'Edit the event' : 'Create new event'} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input type="text"
            placeholder='Event title'
            name='title'
            value={values.title}
            onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input type="text"
            placeholder='Category'
            name='category'
            value={values.category}
            onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input type="text"
            placeholder='Description'
            name='description'
            value={values.description}
            onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input type="text"
            placeholder='City'
            name='city'
            value={values.city}
            onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input type="text"
            placeholder='Venue'
            name='venue'
            value={values.venue}
            onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input type="date"
            placeholder='Date'
            name='date'
            value={values.date}
            onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button type='submit' floated='right' content='Cancel'/>
      </Form>
    </Segment>
  )
}