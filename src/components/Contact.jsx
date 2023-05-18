import { MailContact, LinkedInContact } from './Icons';

export default function Contact() {
  return (
    <section id='contact' className='max-w-4xl h-80 mx-auto mb-10 pt-10'>
      <h3 className='my-4 bg-black text-white font-bold text-2xl text-center rounded-2xl'>
        CONTACTO
      </h3>

      <div className='max-w-lg h-48 mx-auto grid place-items-center'>
        <div className='w-80 mx-auto text-xl'>
          <MailContact />
          <a href='mailto:leivafrancisco631@gmail.com' className='ml-2'>
            leivafrancisco631@gmail.com
          </a>
        </div>

        <div className='w-80 mx-auto text-xl'>
          <LinkedInContact />
          <a
            href='https://www.linkedin.com/in/franciscoleiva14/'
            className='ml-2'
          >
            in/franciscoleiva14
          </a>
        </div>
      </div>
    </section>
  );
}
