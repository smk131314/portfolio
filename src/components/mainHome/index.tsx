import React from 'react'
import { LINKS } from '@src/constants/links'
import classNames from 'classNames/bind'
import styles from '@styles/MainHome.module.scss'
import { MAIN_CANVAS_ID } from '@src/constants'
import { useNav } from '@src/hooks/useNav'
import MainIconsAnimation from './MainIconsAnimation'
import ScrollDownButton from './ScrollDownButton'

const cx = classNames.bind(styles)

const MainHome = () => {
  const homeRef = useNav(LINKS.MAIN.id)

  return (
    <section id={LINKS.MAIN.id} className={cx('mainHome')} ref={homeRef}>
      <div className={cx('descriptionContainer')}>
        <h1>
          Seungmin Kim. <br />a frontend developer.
        </h1>
        <h2>with experience in Architecture</h2>
      </div>
      <div className={cx('canvasContainer')} id={MAIN_CANVAS_ID}>
        <MainIconsAnimation />
      </div>
      <ScrollDownButton />
    </section>
  )
}

export default MainHome
