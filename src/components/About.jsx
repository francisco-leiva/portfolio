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
      <h3 className='mt-4 text-[#f44336] font-bold text-2xl text-center'>
        SOBRE MI
      </h3>

      <p className='m-4 text-xl text-justify'>
        Soy un desarrollador web con conocimientos en Javascript y React, y
        actualmente me encuentro en búsqueda de mi primer empleo. Tengo
        experiencia en la creación de aplicaciones web utilizando estas
        tecnologías, y estoy muy motivado para aplicar mis habilidades en un
        ambiente de trabajo real.
      </p>

      <div>
        <h4 className='text-[#f44336] font-bold text-xl text-center'>SKILLS</h4>

        <div className='my-3 flex justify-evenly flex-wrap'>
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
