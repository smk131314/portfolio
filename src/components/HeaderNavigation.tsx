import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { LINKS } from '@src/constants/links'
import classNames from 'classNames/bind';
import styles from '@styles/HeaderNavigation.module.scss'
import { useRouter } from 'next/router'
import ListIcon from '@images/listicon.svg'
import CloseIcon from '@images/close.svg'

const cx = classNames.bind(styles);

const HeaderNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  const router = useRouter()
  const currentPath = router.asPath

  useEffect(() => {
    setActiveTab(currentPath)
  }, [currentPath])

  const getIsActiveTab = (link: string) => {
    return (activeTab === `/${link}`)
  }
  
  return (
    <>
      <nav className={cx('headerNavigation', {'isOpen': isOpen})}>
        <ul>
          {Object.keys(LINKS).map((item) => {
            if (item === LINKS.MAIN.id.toUpperCase()) return
            return (
              <li key={LINKS[item].id} className={cx({'active': getIsActiveTab(LINKS[item].link)})}><Link href={LINKS[item].link}>{LINKS[item].title}</Link></li>
            )
          })}
        </ul>
      </nav>
      <button className={cx('mobileButton')} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon width="2.25rem" height="2.25rem" fill="white"/> : <ListIcon />}
      </button>
    </>
  )
}

export default HeaderNavigation
