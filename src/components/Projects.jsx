import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
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
      <h3 className='my-4 text-[#f44336] font-bold text-xl text-center'>
        PROYECTOS
      </h3>

      <div ref={containerRef} className={'flex flex-wrap justify-around gap-4'}>
        <article className='card'>
          <Card sx={{ maxWidth: 345 }} className='h-[25rem]'>
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
                Este proyecto fue inspirado en la aplicación del tiempo de
                celulares Samsung. Dependiendo del tipo de clima, la aplicación
                cambia de color.
              </Typography>
            </CardContent>

            <CardActions>
              <Button size='small'>
                <Link href='/'>
                  <WorldIcon />
                </Link>
              </Button>

              <Button size='small'>
                <Link href='/'>
                  <CodeIcon />
                </Link>
              </Button>
            </CardActions>
          </Card>
        </article>

        <article className='card'>
          <Card sx={{ maxWidth: 345 }} className='h-[25rem]'>
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

            <CardActions>
              <Button size='small'>
                <Link href='/'>
                  <WorldIcon />
                </Link>
              </Button>

              <Button size='small'>
                <Link href='/'>
                  <CodeIcon />
                </Link>
              </Button>
            </CardActions>
          </Card>
        </article>

        <article className='card'>
          <Card sx={{ maxWidth: 345 }} className='h-[25rem]'>
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

            <CardActions>
              <Button size='small'>
                <Link href='/'>
                  <WorldIcon />
                </Link>
              </Button>

              <Button size='small'>
                <Link href='/'>
                  <CodeIcon />
                </Link>
              </Button>
            </CardActions>
          </Card>
        </article>

        <article className='card'>
          <Card sx={{ maxWidth: 345 }} className='h-[25rem]'>
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

            <CardActions>
              <Button size='small'>
                <Link href='/'>
                  <WorldIcon />
                </Link>
              </Button>

              <Button size='small'>
                <Link href='/'>
                  <CodeIcon />
                </Link>
              </Button>
            </CardActions>
          </Card>
        </article>
      </div>
    </section>
  );
}
