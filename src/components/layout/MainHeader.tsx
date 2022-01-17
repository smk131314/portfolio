import Link from 'next/link'
import HeaderNavigation from '@components/HeaderNavigation'
import Contact from '@components/Contact'
import { LINKS } from '@src/constants/links'
import styles from '@styles/MainHeader.module.scss'
import classNames from 'classNames/bind'

const cx = classNames.bind(styles)

const MainHeader = () => {
  return (
    <header className={cx('mainHeader')}>
      <Link href={LINKS.MAIN.link} passHref>
        <p className={cx('linkText')}>Home</p>
      </Link>
      <HeaderNavigation />
      <Contact />
    </header>
  )
}

export default MainHeader
