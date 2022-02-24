import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { LINKS } from '@src/constants/links'
import classNames from 'classnames/bind'
import styles from '@styles/HeaderNavigation.module.scss'
import { useRouter } from 'next/router'
import ListIcon from '@images/listicon.svg'
import CloseIcon from '@images/close.svg'
import { NavContext } from '@src/context/NavContext'

const cx = classNames.bind(styles)

const HeaderNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext)

  const router = useRouter()
  const currentPath = router.asPath

  const getIsActiveTab = (id: string) => {
    return activeNavLinkId === id
  }
  const handleLinkClick = (id: string) => {
    setActiveNavLinkId(id)
  }

  return (
    <>
      <nav className={cx('headerNavigation', { isOpen })}>
        <ul>
          {Object.keys(LINKS).map((item) => {
            if (item === LINKS.MAIN.id.toUpperCase()) return false
            return (
              <li
                key={LINKS[item].id}
                className={cx({ active: getIsActiveTab(LINKS[item].id) })}
              >
                <Link href={LINKS[item].link}>{LINKS[item].title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <button
        className={cx('mobileButton')}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        {isOpen ? (
          <CloseIcon width="2.25rem" height="2.25rem" fill="white" />
        ) : (
          <ListIcon />
        )}
      </button>
    </>
  )
}

export default HeaderNavigation
