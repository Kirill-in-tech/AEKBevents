import React from "react";
import { Route, useLocation } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../feature/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../feature/events/eventDetailed/EventDetailedPage';
import EventForm from '../../feature/events/eventForm/EventForm';
import HomePage from '../../feature/home/HomePage';
import NavBar from '../../feature/nav/NavBar';
import Sandbox from '../../feature/sandbox/Sandbox';

function App() {

  const {key} = useLocation();

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route path='/(.+)' render={() => (
        <>
          <NavBar />
          <Container className='main'>
            <Route exact path='/events' component={EventDashboard} />
            <Route exact path='/sandbox' component={Sandbox} />
            <Route path='/events/:id' component={EventDetailedPage} />
            <Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key} />
          </Container>
        </>
      )} />
    </>
  );
}

export default App;