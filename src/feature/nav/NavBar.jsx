import React, { useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Container, Menu } from "semantic-ui-react";
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

export default function NavBar({setFormOpen}) {

	const [authenticated, setAuthenticated] =useState(false);
	const history = useHistory();

	function handleSignOut() {
		setAuthenticated(false);
		history.push('/');
	}

	return (
		<Menu inverted fixed='top'>
			<Container>
				<Menu.Item as={NavLink} exact to='/' header style={{fontWeight: 700}}>
					<img src='/logo192.png' alt='logo' style={{marginRight: 15}} />
					AEKB
				</Menu.Item>
				<Menu.Item as={NavLink} exact to='/events' name='Events'/>
				{authenticated &&
				<Menu.Item as={NavLink} to='/createEvent' 
					style={{backgroundColor:'rgba(255, 255, 255, 0.0)'}}>
					<Button positive inverted content='Create Event' onClick={() => setFormOpen()} />
				</Menu.Item>}

				{authenticated 
					? <SignedInMenu signOut={handleSignOut}/> 
					: <SignedOutMenu authenticate={setAuthenticated}/>}
				
			</Container>
		</Menu>
	)
}