import React, {useEffect} from 'react'
import Head from 'next/head'
import {Intro} from "../lib/components/Intro";
import {useRouter} from "next/router";


const Yfi = () => {
    const router = useRouter();

    useEffect(() => {
        if(location.host !== 'saeed.se') {
            router.replace('/');
        }
    })

    return (
        <>
            <Head>
                <title>Saeed Seyfi - JavaScript Engineer</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Intro/>
        </>
    );
};

export default Yfi
