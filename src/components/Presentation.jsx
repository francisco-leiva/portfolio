import Link from 'next/link';
import { Blob, LinkedInIcon, GitHubIcon } from './Icons';

export default function Presentation() {
  const greeting = "I'm Francisco Leiva";

  return (
    <section className='w-full h-screen'>
      <div className='max-w-4xl h-full mx-auto flex justify-around items-center'>
        <div className='w-80'>
          <h2 className='text-2xl'>{greeting}</h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur dolor error quisquam iste dicta unde suscipit excepturi
            modi impedit optio? Aliquid accusantium reprehenderit assumenda,
            eius eos maiores fugiat itaque iste.
          </p>

          <div>
            <button className='mx-4'>
              <Link href='https://github.com/francisco-leiva' target='_blank'>
                <GitHubIcon />
              </Link>
            </button>

            <button>
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
