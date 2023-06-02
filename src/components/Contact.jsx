import { MailContact, LinkedInContact } from './Icons';

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
            <a
              href='mailto:leivafrancisco631@gmail.com'
              className='ml-2 font-semibold'
            >
              leivafrancisco631@gmail.com
            </a>
          </div>

          <div className='w-[21rem] mx-auto text-lg sm:w-96 sm:text-xl'>
            <LinkedInContact />
            <a
              href='https://www.linkedin.com/in/franciscoleiva14/'
              className='ml-2 font-semibold'
            >
              in/franciscoleiva14
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
