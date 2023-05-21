import React from 'react';
import {signIn, signOut, useSession} from 'next-auth/react';
import {Button} from 'reactstrap';

const GoogleButton =() => {
	const {data: session, status} = useSession();
	let button = (<></>);
	if (status === 'authenticated') {
		button = (<Button outline  color="secondary" onClick={()=>signOut()}>Sign Out</Button>);
	} else {
		button = (<Button outline color="primary" onClick={()=>{
			signIn();
		}}>Sign In</Button>);
	}
	return button;
};

export default GoogleButton;