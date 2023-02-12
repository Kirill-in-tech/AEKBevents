import React, { useState } from 'react';
import { Button, FormField, Header, Segment } from 'semantic-ui-react';
import { createId } from '@paralleldrive/cuid2';
import { useDispatch, useSelector } from 'react-redux';
import { updateEvent, createEvent } from '../eventActions';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

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
      <Formik
        initialValues={initialValues} onSubmit={values => console.log(values)}
      >
        <Form className='ui form'>
          <FormField>
            <Field placeholder='Event title' name='title'/>   
          </FormField>
          <FormField>
            <Field placeholder='Category' name='category'/>   
          </FormField>
          <FormField>
            <Field placeholder='Description' name='description'/>   
          </FormField>
          <FormField>
            <Field placeholder='City' name='city'/>   
          </FormField>
          <FormField>
            <Field placeholder='Venue' name='venue'/>   
          </FormField>
          <FormField>
            <Field placeholder='Date' name='date' type='date' />   
          </FormField>
          
          <Button type='submit' floated='right' positive content='Submit' />
          <Button as={Link} to={'/events'} floated='right' content='Cancel' />
        </Form>

      </Formik>

    </Segment>
  )
}