import Link from 'next/link'
import Head from 'next/head'
import HeaderNavigation from "@components/HeaderNavigation"
import Contact from "@components/contact"
import { LINKS } from '@src/constants/links'

const MainHeader = () => {
  return (
    <Head>
      <Link href={LINKS.main.link}>Home</Link>
      <HeaderNavigation />
      <Contact />
    </Head>
  )
}

export default MainHeader
