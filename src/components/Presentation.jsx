import Link from 'next/link'
import Image from 'next/image'
import me from '../assets/img/me.webp'
import { LinkedInIcon, GitHubIcon } from './Icons'

export default function Presentation() {
  const greeting = '¡Hola 👋, soy Francisco!'

  return (
    <section id='home' className='w-full h-[100svh]'>
      <div className='max-w-4xl h-full mx-auto pt-16 flex flex-col justify-center items-center gap-2 md:flex-row md:justify-around md:gap-6'>
        <div className='max-w-sm mx-auto md:mx-0'>
          <h1 className='text-4xl leading-[3rem] text-center font-bold md:text-5xl md:leading-[4rem] md:text-center'>
            {greeting}
          </h1>

          <p className='my-4 mx-4 text-2xl text-justify sm:my-6 md:text-justify md:mx-0'>
            Desarrollador Front-end 💻. Apasionado por la tecnología y la
            programación.
          </p>

          <div className='text-center'>
            <button className='mx-4 md:mx-8' aria-label='Visit Github profile'>
              <Link
                href='https://github.com/francisco-leiva'
                target='_blank'
                aria-label='Visit my Github profile'
              >
                <GitHubIcon />
              </Link>
            </button>

            <button
              className='mx-4 md:mx-8'
              aria-label='Visit my LinkedIn profile'
            >
              <Link
                href='https://www.linkedin.com/in/franciscoleiva14/'
                target='_blank'
                aria-label='Visit my LinkedIn profile'
              >
                <LinkedInIcon />
              </Link>
            </button>
          </div>
        </div>

        <div className='w-[17rem] h-[17rem] mx-auto sm:w-72 sm:h-72 sm:mx-0 md:w-80 md:h-80'>
          <Image
            src={me}
            width={272}
            height={272}
            alt='Me'
            className='w-full h-full rounded-full'
            priority
          />
        </div>
      </div>
    </section>
  )
}
