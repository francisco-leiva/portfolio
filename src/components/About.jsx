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
      <h3 className='text-[#f44336] font-bold text-xl text-center'>SOBRE MI</h3>
      <p className='my-4 text-lg'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        aperiam, nemo voluptatibus dignissimos incidunt ea a assumenda,
        temporibus quaerat eos maxime reiciendis laborum ratione recusandae
        deleniti. Nesciunt eum quisquam ipsum.
      </p>

      <div>
        <h4 className='mb-2 text-[#f44336] font-bold text-lg text-center'>
          SKILLS
        </h4>

        <div className='flex justify-evenly'>
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
