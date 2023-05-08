import Link from 'next/link';
import { NavbarIcon } from './Icons';

export default function Navbar() {
  const links = [
    { href: '/', name: 'Inicio' },
    { href: '/#about', name: 'Sobre mí' },
    { href: '/#projects', name: 'Proyectos' },
    { href: '/#contact', name: 'Contacto' },
  ];

  return (
    <header className='w-full h-16 bg-black fixed text-lg z-50'>
      <nav className='max-w-4xl h-full mx-auto flex justify-between items-center'>
        <div>
          <Link href='/'>
            <NavbarIcon />
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
