
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Head from 'next/head';
import { getEvents } from '../firebase/firebaseConfig';
import { decrement, increment,incrementByAmount } from '../redux/reducer/counterSlice'
import { useDispatch,useSelector } from 'react-redux';

export default function Home() {
  const count = useSelector((state) => state.event.events)
  console.log(count)

  return (
    <div className={styles.container}>
     <h1>LOOKING FOR DOPE EVENTS? WE'VE GOT YOU!</h1>
     {count.map(event=><p>{event.name}</p>)}
    </div>
  )
}

