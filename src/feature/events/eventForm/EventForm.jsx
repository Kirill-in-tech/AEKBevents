import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import { createId } from '@paralleldrive/cuid2';

export default function EventForm({ setFormOpen, setEvents, createEvent, selectedEvent, updateEvent }) {

  const initialValues = selectedEvent ? selectedEvent : {
    title: '',
    category: '',
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
    if (selectedEvent){
      updateEvent(values); 
      // updateEvent(...selectedEvent, ...values) - substitute the changed properties with new values
    }
    else {
      createEvent({ ...values, id: createId(), hostedBy: 'Me', hostPhotoURL: '/assets/user.png', attendees: [] });
      console.log(values);
    }
    setFormOpen(false);
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
        <Button type='submit' floated='right' content='Cancel' onClick={() => setFormOpen(false)} />
      </Form>
    </Segment>
  )
}