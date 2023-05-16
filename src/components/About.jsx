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
      <h3 className='mt-4 bg-black text-white font-bold text-2xl text-center rounded-2xl'>
        SOBRE MI
      </h3>

      <p className='m-4 text-xl text-justify'>
        Desarrollador web con conocimientos en Javascript y React. Actualmente
        me encuentro en búsqueda de mi primer empleo. Cuento con experiencia en
        estas tecnologías a través de la creación de proyectos personales, y
        estoy muy motivado para aplicar mis habilidades en un ambiente de
        trabajo real.
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
