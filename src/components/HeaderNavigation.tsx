import React from 'react'
import Link from 'next/link'
import { LINKS } from '@src/constants/links'

const HeaderNavigation = () => {
  return (
    <nav>
      <ul>
        {Object.keys(LINKS).map((item) => (
          <li><Link href={LINKS[item].link}>{LINKS[item].title}</Link></li>
        ))}
      </ul>
    </nav>
  )
}

export default HeaderNavigation
