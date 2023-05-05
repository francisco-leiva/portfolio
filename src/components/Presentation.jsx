import Link from 'next/link';
import { Blob, LinkedInIcon, GitHubIcon } from './Icons';

export default function Presentation() {
  const greeting = '¡Hola, soy Francisco Leiva!';

  return (
    <section className='w-full h-screen'>
      <div className='max-w-4xl h-full mx-auto flex justify-between items-center'>
        <div className='w-96'>
          <h2 className='text-5xl'>{greeting}</h2>

          <p className='my-6 text-xl'>
            Desarrollador Front-end especializado en JavaScript. Apasionado por
            la tecnología y la programación.
          </p>

          <div>
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

        <div className='w-80 h-80'>
          <Blob />
        </div>
      </div>
    </section>
  );
}
