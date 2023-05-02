import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useElementOnScreen from '@/hooks/useElementOnScreen';

export default function Projects() {
  const [containerRef, isVisible] = useElementOnScreen();

  return (
    <section id='projects' className='max-w-4xl h-fit mx-auto mb-10'>
      <h3 className='my-4 pt-20 text-center'>Proyectos</h3>

      <div
        ref={containerRef}
        className={`flex flex-wrap justify-around gap-4 ${
          isVisible ? 'visible' : ''
        }`}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image='https://via.placeholder.com/600x400'
            title='PlaceHolder'
          />
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
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image='https://via.placeholder.com/600x400'
            title='PlaceHolder'
          />
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
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image='https://via.placeholder.com/600x400'
            title='PlaceHolder'
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
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image='https://via.placeholder.com/600x400'
            title='PlaceHolder'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Calculator
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
      </div>
    </section>
  );
}
