import React from 'react'
import Image from 'next/image'
import { LINKS } from '@src/constants/links'
import classNames from 'classNames/bind'
import styles from '@styles/MainHome.module.scss'

const cx = classNames.bind(styles)

const MainHome = () => {
  return (
    <section id={LINKS.MAIN.id} className={cx('mainHome')}>
      <div className={cx('descriptionContainer')}>
        <h1>
          Seungmin Kim. <br/>a frontend developer.
        </h1>
        <h2>
          with experience in Architecture
        </h2>
      </div>
      <div className={cx('imageContainer')}>
        <Image
          src='/images/dummy.png'
          alt="dummy"
          width={500}
          height={500}
        />
      </div>
    </section>
  )
}

export default MainHome
