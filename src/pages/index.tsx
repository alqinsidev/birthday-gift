import { useSpring, animated } from '@react-spring/web';
import Head from 'next/head'
import React from 'react'


const Home = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Adjust the duration as needed
  });
  return (
    <animated.div className='min-h-screen flex items-center justify-center flex-col' style={fadeIn}>
      <Head>
        <title>
          HBD Nisa 🎂
        </title>
        <meta property="og:title" content="HBD Nisa 🎂" key="title" />
      </Head>
      <h2 className='text-2xl mb-4'>Happy Birthday Nisa 🎂</h2>
      <button className='bg-blue-500 hover:bg-blue-700 rounded text-white p-2'>BUKA KADO</button>
    </animated.div>
  )
}

export default Home