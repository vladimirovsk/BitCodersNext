import React from 'react';
import {getSession, useSession} from 'next-auth/react';
import {stat} from 'fs';
import {reducer} from 'next/dist/client/components/router-reducer/router-reducer';
import {redirect} from 'next/navigation';

const Account = () => {
	const {data: session, status} = useSession();
	if (status=== 'authenticated') {
		return (
			<div>
				Hi {session?.user?.email}
			</div>
		)
	} else {
		return (
			<div>
				You not signed;
			</div>
		)
	}
}

export default Account;

export const getServerSideProps = async (context) => {
	const session = await getSession(context);
	if (!session){
		return {
			redirect: {destination: '/login'}
		};
	}

	return {
		props: {session}
	}

}
