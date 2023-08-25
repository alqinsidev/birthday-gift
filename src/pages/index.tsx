import { useSpring, animated, useChain, useSpringRef } from '@react-spring/web';
// @ts-ignore
import useSound from 'use-sound'
import Head from 'next/head';
import React, { useState } from 'react';
import { isBeforeAugust28GMT7 } from '@/helpers/date';
import Image from 'next/image'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const fadeInRef = useSpringRef();
  const fadeOutRef = useSpringRef();
  const buttonRef = useSpringRef();

  // Animation for the h2 element
  const fadeIn = useSpring({
    ref: fadeInRef,
    opacity: isVisible ? 0 : 1, // Initially hidden
    from: { opacity: 0 },
    to: { opacity: 1 }, // Fade in when isVisible is false
    config: { duration: 1000 },
  });

  // Animation for the h2 element when fading out
  const fadeOut = useSpring({
    ref: fadeOutRef,
    opacity: isVisible ? 1 : 0, // Initially visible
    from: { opacity: 1 },
    to: { opacity: 0 }, // Fade out when isVisible is true
    config: { duration: 1000 },
  });

  // Animation for the button with a 2-second delay
  const buttonSpring = useSpring({
    ref: buttonRef,
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  useChain([fadeInRef, buttonRef], [0, 1]);

  const [play, { stop, isPlaying }] = useSound("https://firebasestorage.googleapis.com/v0/b/alqinsidev-project.appspot.com/o/y2mate.com%20-%20Can%20You%20Hear%20Me.mp3?alt=media&token=40365312-4170-4289-bb7f-3e8036806217")

  return (
    <div className='min-h-screen'>
      <Head>
        <title>A letter to Nisa 🎂</title>
        <meta property='og:title' content='HBD Nisa 🎂' key='title' />
      </Head>

      <animated.div className={'min-h-screen flex items-center justify-center flex-col bg-orange-50'}>
        <animated.div className={'flex items-center justify-center flex-col'} style={fadeIn}>
          <animated.h2 className='text-2xl mb-4 font-mono'>
            A letter to Nisa
          </animated.h2>
        </animated.div>
        <animated.button
          className={`bg-blue-500 hover:bg-blue-700 rounded text-white p-2`}
          style={buttonSpring}
          disabled={!isBeforeAugust28GMT7()}
          onClick={() => {
            isBeforeAugust28GMT7() ? null : play()
          }}
        >
          {isBeforeAugust28GMT7() ? 'BELUM WAKTUNYA HEY' : 'BUKA PESAN'}
        </animated.button>
      </animated.div>
    </div>
  );
};

export default Home;
