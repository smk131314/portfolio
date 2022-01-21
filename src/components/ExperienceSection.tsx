import React from 'react'
import { LINKS } from '@src/constants/links'
import classNames from 'classNames/bind'
import styles from '@styles/ExperienceSection.module.scss'
import { EXPERIENCES } from '@src/constants/experiences'
import CareerCard from './CareerCard'

const cx = classNames.bind(styles)

const ExperienceSection = () => {
  const steps = EXPERIENCES.map((item) => item.companyName)

  return (
    <section id={LINKS.EXPERIENCE.id} className={cx('experienceSection')}>
      <div className={cx('progressBar')}>
        <div className={cx('progressBarBg')} />
        {steps.map((step, index) => (
            <div className={cx('progressStep', `step-${index}`)} key={step}>
              <div className={cx('progressIndicator')} />
              <div className={cx('progressLabel')}>{step}</div>
            </div>
          )
        )}
      </div>
      <div className={cx('cardContainer')}>
        {EXPERIENCES.map(experience => (
          <CareerCard infoObj={experience} key={experience.companyName}/>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
