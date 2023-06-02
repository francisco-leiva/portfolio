import Image from 'next/image';
import HtmlIcon from '../assets/html-svg.svg';
import CssIcon from '../assets/css-svg.svg';
import SassIcon from '../assets/sass-svg.svg';
import TailwindIcon from '../assets/tailwind-svg.svg';
import JsIcon from '../assets/js-svg.svg';
import ReactIcon from '../assets/react-svg.svg';
import ViteIcon from '../assets/vite-svg.svg';
import NextJsIcon from '../assets/nextjs-svg.svg';
import GitIcon from '../assets/git-svg.svg';
import GithubIcon from '../assets/github-svg.svg';

export default function About() {
  return (
    <section id='about' className='w-full py-16 bg-[#808080] lg:h-[100svh]'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='mt-4 bg-black text-white font-bold text-3xl text-center rounded-2xl'>
          SOBRE MI
        </h2>

        <p className='mx-4 my-8 text-2xl text-justify font-medium'>
          Tengo 22 años y actualmente me encuentro en búsqueda de mi primer
          empleo. Cuento con habilidades en Javascript y React. Adquirí
          experiencia en estas tecnologías a través de la creación de proyectos
          personales, y estoy muy motivado en poder contribuir con mis
          habilidades y conocimientos en un ambiente de trabajo real.
        </p>

        <div className='py-4'>
          <h3 className='w-min mx-auto px-4 bg-black text-white font-bold text-2xl text-center rounded-2xl'>
            SKILLS
          </h3>

          <div className='m-6 flex flex-wrap justify-evenly gap-8 sm:px-16 sm:gap-12 md:px-36'>
            <div className='skills'>
              <Image src={HtmlIcon} alt='HTML icon' width={56} height={56} />
            </div>

            <div className='skills'>
              <Image src={CssIcon} alt='CSS icon' width={56} height={56} />
            </div>

            <div className='skills'>
              <Image src={SassIcon} alt='SASS icon' width={56} height={56} />
            </div>

            <div className='skills'>
              <Image
                src={TailwindIcon}
                alt='Tailwind icon'
                width={56}
                height={56}
              />
            </div>

            <div className='skills'>
              <Image
                src={JsIcon}
                alt='JavaScript icon'
                width={56}
                height={56}
              />
            </div>

            <div className='skills'>
              <Image
                src={ReactIcon}
                alt='React JS icon'
                width={56}
                height={56}
              />
            </div>

            <div className='skills'>
              <Image src={ViteIcon} alt='Vite JS icon' width={56} height={56} />
            </div>

            <div className='skills'>
              <Image
                src={NextJsIcon}
                alt='Next JS icon'
                width={56}
                height={56}
              />
            </div>

            <div className='skills'>
              <Image src={GitIcon} alt='Git icon' width={56} height={56} />
            </div>

            <div className='skills'>
              <Image
                src={GithubIcon}
                alt='Github icon'
                width={56}
                height={56}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
