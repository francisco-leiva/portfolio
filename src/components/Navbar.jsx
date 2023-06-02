import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Link from 'next/link';
import { NavbarLogo, HamburgerMenu, CloseIcon } from './Icons';

export default function Navbar() {
  // Navbar links variable
  const links = [
    { href: '/', name: 'Inicio' },
    { href: '/#about', name: 'Sobre mí' },
    { href: '/#projects', name: 'Proyectos' },
    { href: '/#contact', name: 'Contacto' },
  ];

  // variables to open the modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <header className='w-screen h-16 bg-black fixed text-lg z-50'>
      <nav className='max-w-4xl h-full mx-auto px-2 flex justify-between items-center lg:px-0'>
        <div>
          <Link href='/' aria-label='Go to home page'>
            <NavbarLogo />
          </Link>
        </div>

        <div className='sm:hidden'>
          <button
            className='my-2'
            aria-label='Display page menu'
            onClick={handleOpen}
          >
            <HamburgerMenu />
          </button>

          <Modal open={open} onClose={handleOpen}>
            <div className='h-72 bg-black'>
              <div className='h-16 px-2 flex justify-between items-center'>
                <Link href='/' aria-label='Go to home page'>
                  <NavbarLogo />
                </Link>

                <button onClick={handleOpen}>
                  <CloseIcon />
                </button>
              </div>

              <ul className='text-white text-center text-2xl font-semibold'>
                {links.map((link, index) => {
                  return (
                    <li key={index} className='mx-auto my-4'>
                      <Link href={link.href} onClick={handleOpen}>
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Modal>
        </div>

        <ul className='hidden text-white sm:flex sm:gap-8'>
          {links.map((link, index) => {
            return (
              <li key={index} className='listItem'>
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
