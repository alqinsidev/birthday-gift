import { useSpring, animated, useChain, useSpringRef } from '@react-spring/web';
// @ts-ignore
import useSound from 'use-sound'
import Head from 'next/head';
import React, { useState } from 'react';
import { isBeforeAugust28GMT7 } from '@/helpers/date';
import Image from 'next/image'

const Home = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isPlay, setIsPlay] = useState(false)
  const fadeInRef = useSpringRef();
  const fadeInRef2 = useSpringRef();
  const fadeOutRef = useSpringRef();
  const buttonRef = useSpringRef();

  // Animation for the h2 element
  const fadeIn = useSpring({
    ref: fadeInRef,
    opacity: 0, // Initially hidden
    from: { opacity: 0 },
    to: { opacity: 1 }, // Fade in when isVisible is false
    config: { duration: 1000 },
  });
  const [fadeIn2, fadeIn2Api] = useSpring(() => ({
    ref: fadeInRef2,
    opacity: 0, // Initially hidden
    from: { opacity: 0 },
    to: { opacity: 1 }, // Fade in when isVisible is false
    config: { duration: 3000 },
  }));

  // Animation for the h2 element when fading out
  const [fadeOut, fadeOutApi] = useSpring(() => ({
    ref: fadeOutRef,
    opacity: 1, // Initially visible
    y: 0,
    from: { opacity: 1, y: 0 },
    to: { opacity: 0, y: -100 }, // Fade out when isVisible is true
    config: { duration: 700 },
    onResolve: () => {
      setIsPlay(true)
      setIsVisible(false)
    }
  }));

  // Animation for the button with a 2-second delay
  const buttonSpring = useSpring({
    ref: buttonRef,
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  useChain([fadeInRef, buttonRef], [0, 1]);

  const [play, { stop }] = useSound("https://firebasestorage.googleapis.com/v0/b/alqinsidev-project.appspot.com/o/y2mate.com%20-%20Can%20You%20Hear%20Me.mp3?alt=media&token=40365312-4170-4289-bb7f-3e8036806217")

  const handleOpen = () => {
    fadeOutApi.start()
    play()
    setTimeout(() =>
      fadeIn2Api.start()
      , 1000)
  }

  const handleMusic = () => {
    stop()

  }
  return (
    <div className='min-h-screen bg-orange-50'>
      <Head>
        <title>A letter to Nisa 🎂</title>
        <meta property='og:title' content='HBD Nisa 🎂' key='title' />
      </Head>

      {isVisible ? <animated.div className={'min-h-screen flex items-center justify-center flex-col '} style={fadeOut}>
        <animated.div className={'flex items-center justify-center flex-col'} style={fadeIn}>
          <animated.h2 className='text-2xl mb-4 font-mono'>
            A letter to Nisa
          </animated.h2>
        </animated.div>
        <animated.button
          className={`bg-blue-500 hover:bg-blue-700 rounded text-white p-2`}
          style={buttonSpring}
          disabled={isBeforeAugust28GMT7()}
          onClick={handleOpen}
        >
          {isBeforeAugust28GMT7() ? 'BELUM WAKTUNYA HEY' : 'BUKA PESAN'}
        </animated.button>
      </animated.div>
        :
        <animated.div style={fadeIn2}>
          <div className='flex flex-row justify-center bg-rose-200 py-10'>
            <Image src={'https://firebasestorage.googleapis.com/v0/b/alqinsidev-project.appspot.com/o/bday%20nisa.png?alt=media&token=a2fae41d-6115-4d53-b2c6-3ffaa504ad1a'} width={100} height={100} />
            <div className='px-2'>
              <p className='italic mt-10 text-neutral-700'>"Aku ulang tahun loh gaais"</p>
              <p className='italic text-neutral-700'>-Nisa Agustia 28 Tahun-</p>
            </div>
          </div>
          <div className='flex flex-row justify-center content-center py-10 bg-rose-50'>
            <div>
              <p className='font-semibold font-mono'>Ica itu orangnya:</p>
              <ul className='list-none text-neutral-700'>
                <li>☑ Baik</li>
                <li>☑ Peduli</li>
                <li>☑ Suka ngomel</li>
                <li>☑ Terencana</li>
                <li>☑ Lupaan</li>
                <li className='font-semibold'>☑ HEBOH</li>
                <li>☑ Ternyata Cantik 😋</li>
              </ul>
            </div>
            <Image src={"https://firebasestorage.googleapis.com/v0/b/alqinsidev-project.appspot.com/o/Screenshot_2023-08-27_at_13.48.57-removebg-preview.png?alt=media&token=64c8b288-27fb-4b62-a7b7-8160b60aac0b"} width={160} height={150} />
          </div>
          <div className='pl-7'>
            <div className='flex flex-row items-center py-5'>
              <Image src={"https://firebasestorage.googleapis.com/v0/b/alqinsidev-project.appspot.com/o/Screenshot_2023-08-27_at_13.45.49-removebg-preview.png?alt=media&token=f2eaa035-1f4b-4982-9653-79b5eb61b7cc"} width={220} height={150} />
              <animated.h2 className="text-xl font-mono">
                Sepenggal kisah
              </animated.h2>
            </div>
            <animated.div className="p-4 mb-3">
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <h5 className='text-xl font-medium text-red-400 mb-4 font-mono uppercase'>September 2022</h5>
              <table>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👨🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Hai Ica, kenalin aku padlan temenya sugih….. salam kenal"</td>
                </tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👩🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Hai padlan, salam kenal juga"</td>
                </tr>
              </table>
            </animated.div>
            <animated.div className="p-4 mb-3">
              <h5 className='text-xl font-medium text-red-400 mb-4 font-mono uppercase'>Oktober 2022</h5>
              <table>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👨🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Oii nanti sore jadi gak?"</td>
                </tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👩🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"bolee, jam 5an aja yaak"</td>
                </tr>
                <tr className='italic text-neutral-700 font-sans'>....</tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👨🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Kamu yg lagi ngobrol berdua bukan?"</td>
                </tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👩🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Iyaa..."</td>
                </tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👨🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Aku di mobil innova item"</td>
                </tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👩🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Oke aku kesitu ..."</td>
                </tr>
                <tr className='italic text-neutral-700 font-sans'>...</tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👩🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Hai kenalin aku Ica"</td>
                </tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👨🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Hai aku Padlan ..."</td>
                </tr>
                <tr className='italic text-neutral-700 font-sans'>...</tr>
                <tr className='italic text-neutral-700 font-sans'>- Di parkiran MCD -</tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👩🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Tinggi juga ya lau ..."</td>
                </tr>
              </table>
            </animated.div>
            <animated.div className="p-4 mb-3">
              <h5 className='text-xl font-medium text-red-400 mb-4 font-mono uppercase'>Januari 2023</h5>
              <table>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👩🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Besok rencana nya mau ke nikahan temen di Bekasi"</td>
                </tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👨🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Yaudah hayu aku anter"</td>
                </tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👩🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Serius kamu teh mau anter?"</td>
                </tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👨🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Serius"</td>
                </tr>
              </table>
            </animated.div>
            <animated.div className="p-4 mb-3">
              <h5 className='text-xl font-medium text-red-400 mb-4 font-mono uppercase'>Februari 2023</h5>
              <table>
                <tr className='italic text-neutral-700 font-sans'>- Mau main tapi motor Ica mati -</tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👩🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Paak, motor aku mati :("</td>
                </tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👨🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Yaudah aku ke kosan"</td>
                </tr>
                <tr>...</tr>
                <tr className='italic text-neutral-700 font-sans'>Nyetep motor berdua nyari bengkel ....</tr>
              </table>
            </animated.div>
            <animated.div className="p-4 mb-3">
              <h5 className='text-xl font-medium text-red-400 mb-4 font-mono uppercase'>Maret 2023</h5>
              <table>
                <tr className='italic text-neutral-700 font-sans'>- Mau main, tapi ternyata mamahnya ica lagi di krw dan pengen pulang -</tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👨🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Aku ke krw sore yaa, soalnya siangnya mau nemenin temen lamaran"</td>
                </tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👩🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Sore kayanya aku mau ke bdg, si mamah kekeuh mau pulang"</td>
                </tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👨🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Oh yaudah gpp nanti sama aku aja nganterinya …"</td>
                </tr>
              </table>
            </animated.div>
            <animated.div className="p-4 mb-3">
              <h5 className='text-xl font-medium text-red-400 mb-4 font-mono uppercase'>Mei 2023</h5>
              <table>
                <tr className='italic text-neutral-700 font-sans'>- Lagi lari di KP -</tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👩🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Paak sinii, disitu gak ada jajanan wkwk"</td>
                </tr>
                <tr className='italic text-neutral-700 font-sans'>...</tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👩🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Aku pengen pisang rebus"</td>
                </tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👨🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Pisang rebus?, angeun cau maksudna?"</td>
                </tr>
              </table>
            </animated.div>
            <animated.div className="p-4 mb-3">
              <h5 className='text-xl font-medium text-red-400 mb-4 font-mono uppercase'>Agustus 2023</h5>
              <table>
                <tr className='italic text-neutral-700 font-sans'>- Event lari PRIMAYA -</tr>
                <tr className='flex justify-start'>
                  <td className="italic text-neutral-700 font-sans">👩🏻:</td>
                  <td className="italic text-neutral-700 font-sans">"Pak aku disuruh lari 30Km perbulan, pake Starva aku dong"</td>
                </tr>
                <tr className='italic text-neutral-700 font-sans'>...</tr>
              </table>
            </animated.div>
          </div>
          <div className='px-10 bg-slate-50 flex flex-row py-10'>
            <Image src={'https://firebasestorage.googleapis.com/v0/b/alqinsidev-project.appspot.com/o/IMG-20230312-WA0000-removebg.png?alt=media&token=309e92d8-d2c1-422b-8f3c-59f0b313b8d1'} width={100} height={100} />
            <div className='ml-3'>
              <p className='font-bold'>Do'a Untuk Ica</p>
              <p className='italic'>
                "Terlepas apa yang akan terjadi kedepanya, do'a tulus yang terbaik selalu terpanjat buat Ica"
              </p>
            </div>
          </div>
        </animated.div>
      }
      {
        isPlay &&
        <button onClick={handleMusic} className="fixed z-90 bottom-8 right-8 bg-slate-600 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-lg hover:bg-rose-300 hover:drop-shadow-2xl">X</button>
      }
    </div>
  );
};

export default Home;
