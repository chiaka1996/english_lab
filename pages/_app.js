import {useState, useEffect} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import {State} from "../context/context"
import '../styles/globals.css';
import '../styles/home.css';

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Head>
      {/* <link rel="shortcut icon" href="/logo/slumtechLogo.png" sizes='32x32' />
      <link rel="stylesheet" 
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=call" 
      />
      <link rel="stylesheet" 
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=mail" 
      /> */}
       <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
    <State>
    <div className=''>
    <Component {...pageProps} />
    </div>
    </State>
    </div>
  )
}

export default MyApp;