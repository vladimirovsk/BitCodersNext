import '../styles/globals.css';
import React from 'react';
import { SessionProvider } from "next-auth/react";
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';

export default function App({Component, pageProps, session}): JSX.Element {
    return (
        <>
            <SessionProvider session={session}>
                <Header />
                <Sidebar>
                <Component {...pageProps} />
                </Sidebar>
            </SessionProvider>
        </>
    );
}
