import Image from 'next/image'
import HtmlIcon from '../assets/svg/html-svg.svg'
import CssIcon from '../assets/svg/css-svg.svg'
import SassIcon from '../assets/svg/sass-svg.svg'
import TailwindIcon from '../assets/svg/tailwind-svg.svg'
import JsIcon from '../assets/svg/js-svg.svg'
import ReactIcon from '../assets/svg/react-svg.svg'
import ViteIcon from '../assets/svg/vite-svg.svg'
import NextJsIcon from '../assets/svg/nextjs-svg.svg'
import GitIcon from '../assets/svg/git-svg.svg'
import GithubIcon from '../assets/svg/github-svg.svg'

export default function About() {
  const skills = [
    { id: 1, name: 'HTML icon', icon: HtmlIcon },
    { id: 2, name: 'CSS icon', icon: CssIcon },
    { id: 3, name: 'SASS icon', icon: SassIcon },
    { id: 4, name: 'Tailwind icon', icon: TailwindIcon },
    { id: 5, name: 'JavaScript icon', icon: JsIcon },
    { id: 6, name: 'React.js icon', icon: ReactIcon },
    { id: 7, name: 'Vite.js icon', icon: ViteIcon },
    { id: 8, name: 'Next.js icon', icon: NextJsIcon },
    { id: 9, name: 'Git icon', icon: GitIcon },
    { id: 10, name: 'Github icon', icon: GithubIcon },
  ]

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
            {skills.map((skill) => (
              <div key={skill.id} className='skills'>
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={56}
                  height={56}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
