import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useElementOnScreen from '@/hooks/useElementOnScreen';
import Image from 'next/image';
import { useEffect } from 'react';
import weatherApp from '../assets/weather-app.png';
import claroApp from '../assets/claroarg-app.png';
import blancoYNegroApp from '../assets/blanco-y-negro-app.png';
import adviceApp from '../assets/advice-generator-app.png';

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
          <Card sx={{ maxWidth: 345 }}>
            <Image src={weatherApp} alt='Weather App' sx={{ height: 140 }} />

            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Weather App
              </Typography>

              <Typography variant='body2' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

            <CardActions>
              <Button size='small'>Share</Button>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
        </article>

        <article className='card'>
          <Card sx={{ maxWidth: 345 }}>
            <Image src={claroApp} alt='Weather App' sx={{ height: 140 }} />

            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Claro Arg
              </Typography>

              <Typography variant='body2' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

            <CardActions>
              <Button size='small'>Share</Button>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
        </article>

        <article className='card'>
          <Card sx={{ maxWidth: 345 }}>
            <Image
              src={blancoYNegroApp}
              alt='Weather App'
              sx={{ height: 140 }}
            />

            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                E-commerce
              </Typography>

              <Typography variant='body2' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

            <CardActions>
              <Button size='small'>Share</Button>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
        </article>

        <article className='card'>
          <Card sx={{ maxWidth: 345 }}>
            <Image src={adviceApp} alt='Weather App' sx={{ height: 140 }} />

            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Advice Generator
              </Typography>

              <Typography variant='body2' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

            <CardActions>
              <Button size='small'>Share</Button>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
        </article>
      </div>
    </section>
  );
}
