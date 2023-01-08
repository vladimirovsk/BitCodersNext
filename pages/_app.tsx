import '../styles/globals.css';
import {AppProps} from 'next/app';
import Head from 'next/head';
import React from 'react';
// import {Head} from 'next/document'

export default function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return <>
        <Head>
            <title>BitCoders</title>
            <link rel='icon' href='/favicon.ico'></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
        </Head>

        <Component {...pageProps} />
        </>
}
