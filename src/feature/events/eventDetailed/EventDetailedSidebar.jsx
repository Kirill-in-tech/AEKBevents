import React from 'react';
import { Segment, Item } from 'semantic-ui-react';

export default function EventDetailedSidebar() {
  return (
    <>
      <Segment
        textAlign="center"
        style={{ border: 'none' }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        2 People Going
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          <Item style={{ position: 'relative' }}>
            <Item.Image size="tiny" src='/kir.jpeg' />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <span>Kir</span>
              </Item.Header>
            </Item.Content>
          </Item>
          <Item style={{ position: 'relative' }}>
            <Item.Image size="tiny" src='/aliska.jpeg' />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <span>Aliska</span>
              </Item.Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </>
  )
}