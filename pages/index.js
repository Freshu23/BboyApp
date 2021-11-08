
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home({articles}) {
  console.log(articles)
  const [x,setX]=useState([])
  return (
    <div className={styles.container}>
     <h1>{x}</h1>
     <button onClick={()=>(setX('test'))}>click</button>
    </div>
  )
}

export const getStaticProps = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json()

  return {
    props:{
      articles
    }
  }
}