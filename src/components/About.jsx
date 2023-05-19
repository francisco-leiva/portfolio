import {
  HtmlIcon,
  CssIcon,
  SassIcon,
  TailwindIcon,
  JsIcon,
  ReactIcon,
  ViteIcon,
  NextJsIcon,
  GitIcon,
  GithubIconSkills,
} from './Icons';

export default function About() {
  return (
    <section id='about' className='max-w-4xl h-full mx-auto mb-10 pt-16'>
      <h3 className='mt-4 bg-black text-white font-bold text-3xl text-center rounded-2xl'>
        SOBRE MI
      </h3>

      <p className='mx-4 my-8 text-2xl text-justify font-medium'>
        Tengo 22 años y actualmente me encuentro en búsqueda de mi primer
        empleo. Cuento con habilidades en Javascript y React. Adquirí
        experiencia en estas tecnologías a través de la creación de proyectos
        personales, y estoy muy motivado en poder contribuir con mis habilidades
        y conocimientos en un ambiente de trabajo real.
      </p>

      <div>
        <h4 className='w-min mx-auto px-4 bg-black text-white font-bold text-2xl text-center rounded-2xl'>
          SKILLS
        </h4>

        <div className='m-6 flex flex-wrap justify-evenly gap-8 sm:px-16 sm:gap-12 md:px-36'>
          <HtmlIcon />

          <CssIcon />

          <SassIcon />

          <TailwindIcon />

          <JsIcon />

          <ReactIcon />

          <ViteIcon />

          <NextJsIcon />

          <GitIcon />

          <GithubIconSkills />
        </div>
      </div>
    </section>
  );
}
