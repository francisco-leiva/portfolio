import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useElementOnScreen from '@/hooks/useElementOnScreen';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import weatherApp from '../assets/weather-app.png';
import claroApp from '../assets/claroarg-app.png';
import blancoYNegroApp from '../assets/blanco-y-negro-app.png';
import adviceApp from '../assets/advice-generator-app.png';
import { WorldIcon, CodeIcon } from './Icons';

export default function Projects() {
  const [containerRef, isVisible] = useElementOnScreen();

  useEffect(() => {
    if (isVisible) {
      containerRef.current.querySelectorAll('article').forEach((el) => {
        el.classList.add('visible');
      });
    }
  }, [containerRef, isVisible]);

  return (
    <section id='projects' className='max-w-4xl h-fit mx-auto mb-10 pt-16'>
      <h3 className='mt-4 mb-8 bg-black text-white font-bold text-2xl text-center rounded-2xl'>
        PROYECTOS
      </h3>

      <div ref={containerRef} className='flex flex-wrap justify-around gap-4'>
        <article className='card'>
          <Card sx={{ maxWidth: 345 }} className='h-96 bg-[#DCDCDC]'>
            <Image src={weatherApp} alt='Weather App' sx={{ height: 140 }} />

            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                className='font-semibold text-center'
              >
                Weather App
              </Typography>

              <Typography
                variant='body2'
                color='text.secondary'
                className='text-base text-justify'
              >
                Copia de la aplicación del tiempo de celulares Samsung.
                Dependiendo del tipo de clima, la aplicación cambia de color.
              </Typography>
            </CardContent>

            <CardActions className='flex justify-evenly'>
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
          <Card sx={{ maxWidth: 345 }} className='h-96 bg-[#DCDCDC]'>
            <Image src={claroApp} alt='Weather App' sx={{ height: 140 }} />

            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                className='font-semibold text-center'
              >
                Claro Arg
              </Typography>

              <Typography
                variant='body2'
                color='text.secondary'
                className='text-base text-justify'
              >
                Este proyecto es una copia de la tienda de Claro Argentina, la
                cual se dedica a la venta de celulares y accesorios.
              </Typography>
            </CardContent>

            <CardActions className='flex justify-evenly'>
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
          <Card sx={{ maxWidth: 345 }} className='h-96 bg-[#DCDCDC]'>
            <Image
              src={blancoYNegroApp}
              alt='Weather App'
              sx={{ height: 140 }}
            />

            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                className='font-semibold text-center'
              >
                Blanco y Negro
              </Typography>

              <Typography
                variant='body2'
                color='text.secondary'
                className='text-base text-justify'
              >
                Tienda online inspirada en el comercio de un familiar. La misma
                fue creada para el curso de JavaScript de CoderHouse.
              </Typography>
            </CardContent>

            <CardActions className='flex justify-evenly'>
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
          <Card sx={{ maxWidth: 345 }} className='h-96 bg-[#DCDCDC]'>
            <Image src={adviceApp} alt='Weather App' sx={{ height: 140 }} />

            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                className='font-semibold text-center'
              >
                Advice Generator
              </Typography>

              <Typography
                variant='body2'
                color='text.secondary'
                className='text-base text-justify'
              >
                Desafío de Frontend Mentor que genera consejos aleatorios a
                través de un llamado a una API.
              </Typography>
            </CardContent>

            <CardActions className='flex justify-evenly'>
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
