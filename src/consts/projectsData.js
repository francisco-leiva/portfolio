import weatherAppImage from '../assets/weather-app.webp';
import claroAppImage from '../assets/claroarg-app.webp';
import blancoYNegroAppImage from '../assets/blanco-y-negro-app.webp';
import moviesAppImage from '../assets/movies-app.webp';

export const projects = [
  {
    title: 'Movies App',
    image: moviesAppImage,
    description:
      'Próximos estrenos de películas. Permite encontrar títulos a través de un buscador. (En desarrollo)',
    siteLink: 'https://movies-app-fleiva.vercel.app/',
    codeLink: 'https://github.com/francisco-leiva/movies-app',
  },
  {
    title: 'Weather App',
    image: weatherAppImage,
    description:
      'Aplicación del clima en tiempo real. Dependiendo del tipo de clima, la web cambia de color.',
    siteLink: 'https://weather-app-franciscoleiva.netlify.app/',
    codeLink: 'https://github.com/francisco-leiva/weather-app',
  },
  {
    title: 'Claro Arg',
    image: claroAppImage,
    description:
      'Inspirado en la tienda de Claro Argentina, la cual se dedica a la venta de celulares y accesorios.',
    siteLink: 'https://claroarg-react.netlify.app/',
    codeLink: 'https://github.com/francisco-leiva/react-js',
  },
  {
    title: 'Blanco y Negro',
    image: blancoYNegroAppImage,
    description:
      'E-commerce inspirada en la tienda de un familiar. Proyecto final de Javascript para CoderHouse.',
    siteLink: 'https://blanco-y-negro.netlify.app/',
    codeLink: 'https://github.com/francisco-leiva/javascript',
  },
];
