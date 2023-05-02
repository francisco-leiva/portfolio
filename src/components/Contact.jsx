export default function Contact() {
  return (
    <section id='contact' className='max-w-4xl h-80 mx-auto mb-10'>
      <h3 className='pt-20 text-center'>Contacto</h3>

      <form>
        <div>
          <label htmlFor='form_name'>Nombre</label>
          <input
            id='form_name'
            type='text'
            className='border border-black border-solid'
          />
        </div>

        <div>
          <label htmlFor='form_mail'>Email</label>
          <input
            id='form_mail'
            type='email'
            className='border border-black border-solid'
          />
        </div>

        <div>
          <label htmlFor='form_message'>Mensaje</label>
          <textarea
            id='form_message'
            type='text'
            className='border border-black border-solid'
          />
        </div>

        <button className='bg-red-600 border border-black border-solid'>
          Enviar
        </button>
      </form>
    </section>
  );
}
