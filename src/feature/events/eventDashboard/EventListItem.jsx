import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { deleteEvent } from '../eventActions';
import { useDispatch } from 'react-redux';

export default function EventListItem({event}) {

  const dispatch = useDispatch();

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description content={event.id} />
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment>
        <span>
          <Icon name='clock' />{event.date}
          <Icon style={{marginLeft: 15}} name='marker' />{event.venue}
        </span>
      </Segment>

      <Segment secondary>
        <List horizontal>
          {event.attendees.map(attendee => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>

      <Segment clearing>
        <div>{event.description}</div>
        <Button color='teal' floated='right' content='View' as={Link} to={`/events/${event.id}`} />
        <Button color='red' floated='right' content='Delete' onClick={() => dispatch(deleteEvent(event.id))} />
      </Segment>
    </Segment.Group>
  )
}