import React from 'react';
import {signIn, signOut, useSession} from 'next-auth/react';

const Header = () => {
	const {data: session, status} = useSession();

	let user =
		(<div>
				{status}
			</div>
		)

	if (status === 'authenticated') {
		user = (
			<button onClick={() => signOut()}>Sign Out</button>
		);

	} else {
		user = (
			<button onClick={() => signIn()}>Sign in</button>
		)
	}

	return (
		<div className='bg-gray-200 flex justify-between px-4 pt-4'>
			<h2>{session?.user?.name}</h2>
			<h2>{user}</h2>
		</div>
	)
}

export default Header;