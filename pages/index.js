import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout } from '../components/Layout'


export default function Home() {
  return (
    <>
    <Layout page='Home'>
      <br />
      <h1 className='text-center text-info'>La NASA et ses API </h1>
      <br />
      <img src='/Accueil.jpg' width ="100%" height= "100%"/>

    </Layout>
    </>
  )
}

