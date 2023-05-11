import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Link from 'next/link';
import { NavbarLogo, HamburgerMenu, CloseIcon } from './Icons';

export default function Navbar() {
  const links = [
    { href: '/', name: 'Inicio' },
    { href: '/#about', name: 'Sobre mí' },
    { href: '/#projects', name: 'Proyectos' },
    { href: '/#contact', name: 'Contacto' },
  ];

  // useState for open the modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <header className='w-full h-16 bg-black fixed text-lg z-50'>
      <nav className='max-w-4xl h-full mx-auto px-2 flex justify-between items-center md:px-0'>
        <div>
          <Link href='/'>
            <NavbarLogo />
          </Link>
        </div>

        <div className='sm:hidden'>
          <button className='my-2' onClick={handleOpen}>
            <HamburgerMenu />
          </button>

          <Modal open={open} onClose={handleClose}>
            <div className='h-60 flex flex-col items-center bg-black'>
              <button className='px-2 py-3 self-end' onClick={handleClose}>
                <CloseIcon />
              </button>

              <ul className='text-white text-center text-xl'>
                {links.map((link, index) => {
                  return (
                    <li key={index} className='block my-3'>
                      <Link href={link.href} onClick={handleClose}>
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Modal>
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
