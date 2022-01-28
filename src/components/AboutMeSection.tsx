import React, { useState } from 'react'
import { LINKS } from '@src/constants/links'
import classNames from 'classNames/bind'
import styles from '@styles/AboutMeSection.module.scss'
import { ABOUTMELIST } from '@src/constants/aboutme'
import { useNav } from '@src/hooks/useNav'

const cx = classNames.bind(styles)

const AboutMeSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const aboutMeRef = useNav(LINKS.ABOUTME.id)

  return (
    <section
      id={LINKS.ABOUTME.id}
      className={cx('aboutMeSection')}
      ref={aboutMeRef}
    >
      <div className={cx('spinnerContainer')}>
        <div className={cx('spinnerWrapper')}>
          <span>I am a</span>
          <ul className={cx('spinner')}>
            {ABOUTMELIST.map((item, index) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>
        <p className={cx('description')}>
          {ABOUTMELIST[selectedIndex].description}
        </p>
      </div>
    </section>
  )
}

export default AboutMeSection
