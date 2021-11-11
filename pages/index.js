
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Head from 'next/head';
import { getEvents } from '../firebase/firebaseConfig';

export default function Home({articles}) {
  console.log(articles)
  const [x,setX]=useState([])
  return (
    <div className={styles.container}>
      <Head>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgDpMx1R4rp7PcerWXYXpODWKqALHZVvk&libraries=places"></script>
      </Head>
     <h1>LOOKING FOR DOPE EVENTS? WE'VE GOT YOU!</h1>
     <button onClick={()=>(setX('test'))}>click</button>
    </div>
  )
}

