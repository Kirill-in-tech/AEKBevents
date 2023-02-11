import React from 'react';
import { Container, Segment, Image, Header, Button, Icon } from 'semantic-ui-react';

export default function HomePage({history}) {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container >
        <Header as='h1' inverted>
          <Image src='/assets/logo.png' size='massive' style={{marginBottom: 12}} />
          AEKB 
        </Header>
        <Button onClick={() => {history.push('/events')}} size='huge' inverted>
          Get Started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  )
}