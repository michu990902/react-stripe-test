import React, { useContext } from "react";
import { UserContext } from '@lib/context';

import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import SignIn from '@components/SignIn';
import SignOut from '@components/SignOut';

export default function Home() {
    const ctx = useContext(UserContext);

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SignIn/>
            <SignOut/>
            <p>email: {ctx.email}</p>
            <p>username: {ctx.username}</p>
        </div>
    )
}
