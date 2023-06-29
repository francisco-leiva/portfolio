import Link from 'next/link'
import { MailContact, LinkedInContact } from './Icons'

export default function Contact() {
  return (
    <section id='contact' className='w-full py-16 bg-[#808080]'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='my-4 bg-black text-white font-bold text-2xl text-center rounded-2xl'>
          CONTACTO
        </h2>

        <div className='max-w-lg h-48 mx-auto grid place-items-center'>
          <div className='w-[21rem] mx-auto text-lg sm:w-96 sm:text-xl'>
            <MailContact />

            <Link
              href='mailto:leivafrancisco631@gmail.com'
              className='ml-2 font-semibold'
              aria-label='Send me an email'
            >
              leivafrancisco631@gmail.com
            </Link>
          </div>

          <div className='w-[21rem] mx-auto text-lg sm:w-96 sm:text-xl'>
            <LinkedInContact />

            <Link
              href='https://www.linkedin.com/in/franciscoleiva14/'
              className='ml-2 font-semibold'
              aria-label='Contact me on LinkedIn'
            >
              in/franciscoleiva14
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
