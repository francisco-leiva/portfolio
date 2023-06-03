import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useElementOnScreen from '@/hooks/useElementOnScreen';
import weatherApp from '../assets/weather-app.png';
import claroApp from '../assets/claroarg-app.png';
import blancoYNegroApp from '../assets/blanco-y-negro-app.png';
import adviceApp from '../assets/advice-generator-app.png';
import { WorldIcon, CodeIcon } from './Icons';

export default function Projects() {
  const [containerRef, isVisible] = useElementOnScreen();

  // Reveal cards on scroll
  useEffect(() => {
    if (isVisible) {
      containerRef.current.querySelectorAll('article').forEach((el) => {
        el.classList.add('visible');
      });
    }
  }, [containerRef, isVisible]);

  return (
    <section id='projects' className='max-w-4xl h-fit mx-auto py-16'>
      <h2 className='mt-4 mb-8 bg-black text-white font-bold text-3xl text-center rounded-2xl'>
        PROYECTOS
      </h2>

      <div ref={containerRef} className='flex flex-wrap justify-around gap-y-4'>
        <article className='card'>
          <Card
            sx={{ maxWidth: 345, backgroundColor: '#DCDCDC' }}
            className='h-[26rem]'
          >
            <Image src={weatherApp} alt='Weather App' sx={{ height: 140 }} />

            <CardContent>
              <h3 className='mb-3 font-semibold text-3xl text-center'>
                Weather App
              </h3>

              <p className='text-lg text-justify'>
                Copia de la app del tiempo de celulares Samsung. Dependiendo del
                clima, la web cambia de color.
              </p>
            </CardContent>

            <CardActions className='px-4 py-0 flex justify-evenly'>
              <Link
                href='https://weather-app-franciscoleiva.netlify.app/'
                className='px-4'
              >
                <WorldIcon />
              </Link>

              <Link
                href='https://github.com/francisco-leiva/weather-app'
                className='px-4'
              >
                <CodeIcon />
              </Link>
            </CardActions>
          </Card>
        </article>

        <article className='card'>
          <Card
            sx={{ maxWidth: 345, backgroundColor: '#DCDCDC' }}
            className='h-[26rem]'
          >
            <Image src={claroApp} alt='Claro App' sx={{ height: 140 }} />

            <CardContent>
              <h3 className='mb-3 font-semibold text-3xl text-center'>
                Claro Arg
              </h3>

              <p className='text-lg text-justify'>
                Inspirado en la tienda de Claro Argentina, la cual se dedica a
                la venta de celulares y accesorios.
              </p>
            </CardContent>

            <CardActions className='px-4 py-0 flex justify-evenly'>
              <Link href='https://claroarg-react.netlify.app/' className='px-4'>
                <WorldIcon />
              </Link>

              <Link
                href='https://github.com/francisco-leiva/react-js'
                className='px-4'
              >
                <CodeIcon />
              </Link>
            </CardActions>
          </Card>
        </article>

        <article className='card'>
          <Card
            sx={{ maxWidth: 345, backgroundColor: '#DCDCDC' }}
            className='h-[26rem]'
          >
            <Image
              src={blancoYNegroApp}
              alt='Blanco y Negro App'
              sx={{ height: 140 }}
            />

            <CardContent>
              <h3 className='mb-3 font-semibold text-3xl text-center'>
                Blanco y Negro
              </h3>

              <p className='text-lg text-justify'>
                E-commerce inspirada en la tienda de un familiar. Proyecto final
                de Javascript para CoderHouse.
              </p>
            </CardContent>

            <CardActions className='px-4 py-0 flex justify-evenly'>
              <Link href='https://blanco-y-negro.netlify.app/' className='px-4'>
                <WorldIcon />
              </Link>

              <Link
                href='https://github.com/francisco-leiva/javascript'
                className='px-4'
              >
                <CodeIcon />
              </Link>
            </CardActions>
          </Card>
        </article>

        <article className='card'>
          <Card
            sx={{ maxWidth: 345, backgroundColor: '#DCDCDC' }}
            className='h-[26rem]'
          >
            <Image
              src={adviceApp}
              alt='Advice Generator App'
              sx={{ height: 140 }}
            />

            <CardContent>
              <h3 className='mb-3 font-semibold text-3xl text-center'>
                Advice Generator
              </h3>

              <p className='text-lg text-justify'>
                Desafío de Frontend Mentor que genera consejos aleatorios al
                clickear un botón.
              </p>
            </CardContent>

            <CardActions className='px-4 py-0 flex justify-evenly'>
              <Link
                href='https://advice-generator-franciscoleiva.netlify.app/'
                className='px-4'
              >
                <WorldIcon />
              </Link>

              <Link
                href='https://github.com/francisco-leiva/advice-generator-app'
                className='px-4'
              >
                <CodeIcon />
              </Link>
            </CardActions>
          </Card>
        </article>
      </div>
    </section>
  );
}
