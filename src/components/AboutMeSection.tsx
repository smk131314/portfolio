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

  const handleItemClick = (index: number) => {
    setSelectedIndex(index)
  }

  const halfwayIndex = Math.ceil(ABOUTMELIST.length / 2)
  const itemHeight = 68 // $extra-large: 4.25rem
  const shuffleThreshold = halfwayIndex * itemHeight
  const visibleStyleThreshold = shuffleThreshold / 2

  const getIsVisible = (index: number) => {
    return (
      Math.abs(determinePlacement(index) as number) <= visibleStyleThreshold
    )
  }

  const determinePlacement = (itemIndex: number) => {
    if (selectedIndex === itemIndex) return 0

    if (itemIndex >= halfwayIndex) {
      if (selectedIndex > itemIndex - halfwayIndex) {
        return (itemIndex - selectedIndex) * itemHeight
      }
      return -(ABOUTMELIST.length + selectedIndex - itemIndex) * itemHeight
    }

    if (itemIndex > selectedIndex) {
      return (itemIndex - selectedIndex) * itemHeight
    }

    if (itemIndex < selectedIndex) {
      if ((selectedIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (ABOUTMELIST.length - (selectedIndex - itemIndex)) * itemHeight
      }
      return -(selectedIndex - itemIndex) * itemHeight
    }

    return 0
  }

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
              <button
                key={item.title}
                type="button"
                onClick={() => handleItemClick(index)}
                className={cx({
                  selected: selectedIndex === index,
                  visible: getIsVisible(index),
                })}
                style={{
                  transform: `translateY(${determinePlacement(index)}px)`,
                }}
              >
                {item.title}
              </button>
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
