import Link from 'next/link';
import Image from 'next/image';
import me from '../assets/me.jpg';
import { LinkedInIcon, GitHubIcon } from './Icons';

export default function Presentation() {
  const greeting = '¡Hola, soy Francisco Leiva!';

  return (
    <section className='w-full h-[100svh]'>
      <div className='max-w-4xl h-full mx-auto pt-16 flex flex-col justify-center items-center gap-6 md:flex-row md:justify-around'>
        <div className='max-w-sm mx-auto md:mx-0'>
          <h2 className='text-5xl text-center md:text-left'>{greeting}</h2>

          <p className='my-6 text-xl text-center md:text-left'>
            Desarrollador Front-end 💻. Apasionado por la tecnología y la
            programación.
          </p>

          <div className='text-center md:text-left'>
            <button className='mx-4'>
              <Link href='https://github.com/francisco-leiva' target='_blank'>
                <GitHubIcon />
              </Link>
            </button>

            <button className='mx-4'>
              <Link
                href='https://www.linkedin.com/in/franciscoleiva14/'
                target='_blank'
              >
                <LinkedInIcon />
              </Link>
            </button>
          </div>
        </div>

        <div className='w-64 h-64 mx-auto relative sm:w-72 sm:h-72 sm:mx-0 md:w-80 md:h-80'>
          <Image src={me} alt='Me' fill={true} className='rounded-full' />
        </div>
      </div>
    </section>
  );
}
