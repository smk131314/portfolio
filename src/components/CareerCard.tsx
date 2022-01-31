import React from 'react'
import classNames from 'classNames/bind'
import styles from '@styles/CareerCard.module.scss'
import Image from 'next/image'
import { ExperienceType, ICON_INFO } from '@src/constants/experiences'
import LinkIcon from '@images/north_east.svg'
import MoreIcon from '@images/more.svg'
import { useProgress } from '@src/hooks/useProgress'
import SingleModelAnimation from './SingleModelAnimation'

const cx = classNames.bind(styles)

type CareerCardProps = {
  infoObj: ExperienceType
}

const CareerCard = (props: CareerCardProps) => {
  const { infoObj } = props
  const {
    companyName,
    role,
    startDate,
    endDate,
    companyDescription,
    companyLink,
    tags,
    descriptions,
    id,
  } = infoObj

  const { iconName, color } = ICON_INFO[id]

  const careerCardRef = useProgress(id)

  return (
    <div className={cx('careerCard')} ref={careerCardRef}>
      <div className={cx('cardContainer')}>
        <h1>{role}</h1>
        <div className={cx('companyNameWrapper')}>
          <p>@{companyName}</p>
          <a href={companyLink}>
            <LinkIcon width="1rem" height="1rem" fill="#4654C8" />
          </a>
        </div>
        <p className={cx('dateInfo')}>{`${startDate} - ${endDate}`}</p>
        <p className={cx('companyInfo')}>{companyDescription}</p>
        <div className={cx('tagsContainer')}>
          {tags.map((tag, index) => (
            <div className={cx('tag')} key={tag}>
              {tag}
            </div>
          ))}
          <button type="button" className={cx('moreButton')}>
            <MoreIcon width="1.5rem" height="1.5rem" fill="white" />
          </button>
        </div>
        <div className={cx('descWrapper')}>
          <p>Role</p>
          <ul>
            {descriptions.map((description, index) => (
              <li
                key={description}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className={cx('imageWrapper')}>
        <SingleModelAnimation name={iconName} color={color} />
      </div>
    </div>
  )
}

export default CareerCard
