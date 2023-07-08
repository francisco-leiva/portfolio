import { useState } from 'react'
import Link from 'next/link'
import { NavbarLogo, HamburgerMenu } from './Icons'

export default function Navbar() {
  // Navbar links
  const links = [
    { href: '/#home', name: 'Inicio' },
    { href: '/#about', name: 'Sobre mí' },
    { href: '/#projects', name: 'Proyectos' },
    { href: '/#contact', name: 'Contacto' },
  ]

  // state to open navbar
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  const handleClose = () => setOpen(false)

  return (
    <header
      className={`w-screen h-16 bg-black text-white fixed text-lg z-50 ${
        open ? 'open' : ''
      }`}
    >
      <nav className='max-w-4xl mx-auto px-2 flex flex-col items-center sm:flex-row sm:justify-between lg:px-0'>
        <div className='w-full h-16 flex justify-between items-center sm:w-fit'>
          <Link href='/' aria-label='Go to home page'>
            <NavbarLogo />
          </Link>

          <button
            className='sm:hidden'
            aria-label='Display page menu'
            onClick={handleOpen}
          >
            <HamburgerMenu />
          </button>
        </div>

        <ul className={`hidden sm:flex sm:gap-8 ${open ? 'open' : ''}`}>
          {links.map((link) => {
            return (
              <li key={link.name} className='listItem'>
                <Link href={link.href} onClick={handleClose} scroll={false}>
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
