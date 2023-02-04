import React from "react";
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../feature/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../feature/events/eventDetailed/EventDetailedPage';
import EventForm from '../../feature/events/eventForm/EventForm';
import HomePage from '../../feature/home/HomePage';
import NavBar from '../../feature/nav/NavBar';

function App() {

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route path='/(.+)' render={() => (
        <>
          <NavBar />
          <Container className='main'>
            <Route exact path='/events' component={EventDashboard} />
            <Route path='/events/:id' component={EventDetailedPage} />
            <Route path={['/createEvent', '/manage/:id']} component={EventForm} />
          </Container>
        </>
      )} />
    </>
  );
}

export default App;