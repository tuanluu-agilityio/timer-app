import { ClockIcon } from '@heroicons/react/solid'
import Link from 'next/link'

interface Props {
  siteTitle: string
}

const Logo = ({ siteTitle }: Props) => {
  return (
    <Link href="/">
      <a className="flex items-center">
        <ClockIcon className="w-5 h-5 mr-3 flex-shrink-0" />
        <span className="text-1xl font-sans tracking-tight whitespace-nowrap">{siteTitle}</span>
      </a>
    </Link>
  )
}

export default Logo