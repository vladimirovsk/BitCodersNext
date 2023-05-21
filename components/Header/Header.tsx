import React from 'react';
import {useSession} from 'next-auth/react';
import GoogleButton from '../GoogleButton/GoogleButton';
import Image from 'next/image';

const Header = () => {
	const {data: session, status} = useSession();
	const image = session?.user?.image;

	const leftBlock = (<div className="flex"><h2>{session?.user?.name}</h2></div>)
	return (
		<div className='bg-gray-100 flex justify-between p-4 border-2 border-gray-200'>
			{leftBlock}
			<h2>{<GoogleButton />}</h2>
		</div>
	)
}

export default Header;