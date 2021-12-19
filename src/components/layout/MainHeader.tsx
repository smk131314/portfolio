import Link from 'next/link'
import HeaderNavigation from "@components/HeaderNavigation"
import Contact from "@components/contact"
import { LINKS } from '@src/constants/links'

const MainHeader = () => {
  return (
    <header>
      <Link href={LINKS.main.link}>Home</Link>
      <HeaderNavigation />
      <Contact />
    </header>
  )
}

export default MainHeader
