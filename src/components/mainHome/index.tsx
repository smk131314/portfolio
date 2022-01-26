import React from 'react'
import { LINKS } from '@src/constants/links'
import classNames from 'classNames/bind'
import styles from '@styles/MainHome.module.scss'
import { MAIN_CANVAS_ID } from '@src/constants'
import MainIconsAnimation from './MainIconsAnimation'

const cx = classNames.bind(styles)

const MainHome = () => {
  return (
    <section id={LINKS.MAIN.id} className={cx('mainHome')}>
      <div className={cx('descriptionContainer')}>
        <h1>
          Seungmin Kim. <br />a frontend developer.
        </h1>
        <h2>with experience in Architecture</h2>
      </div>
      <div className={cx('canvasContainer')} id={MAIN_CANVAS_ID}>
        <MainIconsAnimation />
      </div>
    </section>
  )
}

export default MainHome
