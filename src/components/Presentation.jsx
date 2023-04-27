import { Blob } from './Icons';

export default function Presentation() {
  const greeting = "I'm Francisco Leiva";

  return (
    <section className='w-full h-screen'>
      <div className='max-w-4xl h-full mx-auto flex justify-around items-center'>
        <h2 className='text-2xl'>{greeting}</h2>

        <div className='w-80 h-80'>
          <Blob />
        </div>
      </div>
    </section>
  );
}
