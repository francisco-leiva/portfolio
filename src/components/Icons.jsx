export function CodeIcon() {
  return (
    <svg
      className='w-12 h-12 text-white'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      strokeWidth='1.5'
      color='#000'
      viewBox='0 0 24 24'
    >
      <path
        className='stroke-white'
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M13.5 6L10 18.5m-3.5-10L3 12l3.5 3.5m11-7L21 12l-3.5 3.5'
      ></path>
    </svg>
  );
}

export function Blob() {
  return (
    <div className='tk-blob' style={{ fill: '#f44336' }}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 341.4 374.7'>
        <path d='M309.9 70.6c37.8 52.7 39.8 128.7 15.4 184.1-24.3 55.4-75 90.1-125.4 107.4-50.4 17.4-100.4 17.4-136.2-3.3-35.7-20.7-57.2-62-62.4-102.1-5.2-40.2 5.8-79 29.1-128.3C53.6 79.1 89.1 19.3 143.7 4.1 198.3-11.2 272 18 309.9 70.6z'></path>
      </svg>
    </div>
  );
}
