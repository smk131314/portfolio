import React, { useContext } from 'react'
import { LINKS } from '@src/constants/links'
import classNames from 'classnames/bind'
import styles from '@styles/ExperienceSection.module.scss'
import { EXPERIENCES } from '@src/constants/experiences'
import { useNav } from '@src/hooks/useNav'
import { NavContext } from '@src/context/NavContext'
import CareerCard from './CareerCard'

const cx = classNames.bind(styles)

const ExperienceSection = () => {
  const steps = EXPERIENCES.map((item) => item.companyName)
  const experienceRef = useNav(LINKS.EXPERIENCE.id)
  const { activeCareerCardId } = useContext(NavContext)

  const getProgressClassName = () => {
    switch (activeCareerCardId) {
      case EXPERIENCES[1].id:
        return 'middle'
      case EXPERIENCES[2].id:
        return 'end'
      default:
        return ''
    }
  }

  const getCurrentIndex = () => {
    const currentIndex = EXPERIENCES.findIndex(
      (item) => item.id === activeCareerCardId,
    )
    return currentIndex
  }

  return (
    <section
      id={LINKS.EXPERIENCE.id}
      className={cx('experienceSection')}
      ref={experienceRef}
    >
      <div className={cx('progressBar')}>
        <div className={cx('progressBarBg', getProgressClassName())} />
        {steps.map((step, index) => (
          <div
            className={cx('progressStep', `step-${index}`, {
              active: activeCareerCardId === EXPERIENCES[index].id,
            })}
            key={step}
          >
            <div
              className={cx('progressIndicator', {
                passed: index < getCurrentIndex(),
              })}
            />
            <div className={cx('progressLabel')}>{step}</div>
          </div>
        ))}
      </div>
      <div className={cx('cardContainer')}>
        {EXPERIENCES.map((experience) => (
          <CareerCard infoObj={experience} key={experience.companyName} />
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
