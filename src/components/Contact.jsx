export default function Contact() {
  return (
    <section id='contact' className='max-w-4xl h-fit mx-auto mb-10 pt-10'>
      <h3 className='text-[#f44336] font-bold text-xl text-center'>CONTACTO</h3>

      <form className='max-w-lg mx-auto'>
        <div className='my-5'>
          <input
            type='text'
            placeholder='Nombre'
            className='w-full p-2 bg-[#efefef] text-lg rounded'
          />
        </div>

        <div className='my-5'>
          <input
            type='email'
            placeholder='Email'
            className='w-full p-2 bg-[#efefef] text-lg rounded'
          />
        </div>

        <div className='my-5 mb-4'>
          <textarea
            type='text'
            placeholder='Escribe tu mensaje'
            rows={5}
            className='w-full p-2 bg-[#efefef] text-lg rounded resize-none'
          />
        </div>

        <button className='w-full p-2 bg-[#f44336] font-medium text-white text-lg rounded'>
          Enviar
        </button>
      </form>
    </section>
  );
}
