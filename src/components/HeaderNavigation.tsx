import React from 'react'
import Link from 'next/link'
import { LINKS } from '@src/constants/links'
import classNames from 'classNames/bind';
import styles from '@styles/HeaderNavigation.module.scss'
import { useRouter } from 'next/router'

const cx = classNames.bind(styles);

const HeaderNavigation = () => {
  const router = useRouter()
  const getIsActiveTab = (link: string) => {
    return (router.asPath === `/${link}`)
  }
  
  return (
    <nav className={cx('headerNavigation')}>
      <ul>
        {Object.keys(LINKS).map((item) => {
          if (item === LINKS.main.id) return
          return (
            <li key={LINKS[item].id} className={cx({'active': getIsActiveTab(LINKS[item].link)})}><Link href={LINKS[item].link}>{LINKS[item].title}</Link></li>
          )
        })}
      </ul>
    </nav>
  )
}

export default HeaderNavigation
