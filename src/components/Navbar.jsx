import Link from 'next/link';
import { NavbarLogo, HamburgerMenu, CloseIcon } from './Icons';

export default function Navbar() {
  const links = [
    { href: '/', name: 'Inicio' },
    { href: '/#about', name: 'Sobre mí' },
    { href: '/#projects', name: 'Proyectos' },
    { href: '/#contact', name: 'Contacto' },
  ];

  return (
    <header className='w-full h-16 bg-black fixed text-lg z-50'>
      <nav className='max-w-4xl h-full mx-auto px-2 flex justify-between items-center md:px-0'>
        <div>
          <Link href='/'>
            <NavbarLogo />
          </Link>
        </div>

        <div className='sm:hidden'>
          <button className='my-2'>
            <HamburgerMenu />
          </button>
        </div>

        <ul className='hidden text-white sm:inline'>
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
