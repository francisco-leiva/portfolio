import Link from 'next/link';
import { CodeIcon } from './Icons';

export default function Navbar() {
  const links = [
    { href: '/', name: 'Inicio' },
    { href: '/#about', name: 'Sobre mí' },
    { href: '/#projects', name: 'Proyectos' },
    { href: '/#contact', name: 'Contacto' },
  ];

  return (
    <header className='w-full h-16 bg-black sticky top-0 text-lg'>
      <nav className='max-w-4xl h-full mx-auto flex justify-between items-center'>
        <div>
          <Link href='/'>
            <CodeIcon />
          </Link>
        </div>

        <ul className='text-white'>
          {links.map((link, index) => {
            return (
              <li key={index} className='inline mx-5 first:ml-0 last:mr-0'>
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
