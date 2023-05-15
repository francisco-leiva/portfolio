import Link from 'next/link';
import { Blob, LinkedInIcon, GitHubIcon } from './Icons';

export default function Presentation() {
  const greeting = '¡Hola, soy Francisco Leiva!';

  return (
    <section className='w-full h-[100svh]'>
      <div className='max-w-4xl h-full mx-auto flex flex-col justify-center items-center gap-6 sm:flex-row sm:justify-around'>
        <div className='max-w-sm mx-auto sm:mx-0'>
          <h2 className='text-5xl text-center sm:text-left'>{greeting}</h2>

          <p className='my-6 text-xl text-center sm:text-left'>
            Desarrollador Front-end 💻. Apasionado por la tecnología y la
            programación.
          </p>

          <div className='text-center'>
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

        <div className='w-60 h-60 mx-auto sm:w-80 sm:h-80 sm:mx-0'>
          <Blob />
        </div>
      </div>
    </section>
  );
}
