import Link from 'next/link';

export default function Navbar() {
  const links = [
    { href: '/', name: 'Inicio' },
    { href: '/#about', name: 'Sobre mí' },
    { href: '/#projects', name: 'Proyectos' },
    { href: '/#contact', name: 'Contacto' },
  ];

  return (
    <nav className='w-full h-14  bg-black'>
      <ul className='flex justify-center items-center gap-4'>
        {links.map((link, index) => {
          return (
            <li key={index} className='text-white'>
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
