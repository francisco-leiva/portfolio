import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Image from 'next/image'
import Link from 'next/link'
import { WorldIcon, CodeIcon } from './Icons'

export default function ProjectCard({
  title,
  image,
  description,
  siteLink,
  codeLink,
}) {
  return (
    <Card
      sx={{ maxWidth: 345, backgroundColor: '#DCDCDC' }}
      className='h-[28rem]'
    >
      <Image src={image} alt={title} width={'1920'} height={'995'} />

      <CardContent>
        <h3 className='mb-3 font-semibold text-3xl text-center'>{title}</h3>

        <p className='text-lg text-justify'>{description}</p>
      </CardContent>

      <CardActions className='px-4 py-2 flex justify-evenly'>
        <Link
          href={siteLink}
          target='_blank'
          className='px-4'
          aria-label='Visit live site'
        >
          <WorldIcon />
        </Link>

        <Link
          href={codeLink}
          target='_blank'
          className='px-4'
          aria-label='Visit the code on github'
        >
          <CodeIcon />
        </Link>
      </CardActions>
    </Card>
  )
}
