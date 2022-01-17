import React from 'react'
import { LINKS } from '@src/constants/links'
import classNames from 'classNames/bind'
import styles from '@styles/ExperienceSection.module.scss'
import CareerCard from './CareerCard'

const cx = classNames.bind(styles)

const ExperienceSection = () => {
  return (
    <section id={LINKS.EXPERIENCE.id} className={cx('experienceSection')}>
      <div className={cx('progressBar')}></div>
      <CareerCard />
    </section>
  )
}

export default ExperienceSection
