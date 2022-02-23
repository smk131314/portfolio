import React, { useState } from 'react'
import classNames from 'classNames/bind'
import styles from '@styles/ProjectCard.module.scss'
import { ProjectType } from '@src/constants/projects'
import LinkIcon from '@images/north_east.svg'
import GithubIcon from '@images/github.svg'
import Image from 'next/image'
import ProjectModal from './ProjectModal'

const cx = classNames.bind(styles)

type ProjectCardProps = {
  infoObj: ProjectType
  isRightAligned: boolean
}

const ProjectCard = (props: ProjectCardProps) => {
  const { infoObj, isRightAligned } = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {
    projectName,
    companyName,
    role,
    startDate,
    endDate,
    summary,
    githubLink,
    linkUrl,
    tags,
    descriptions,
    previewPath,
  } = infoObj

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className={cx('projectCard', { isRightAligned })}>
      <div className={cx('cardContainer')}>
        <div className={cx('headerWrapper')}>
          <div className={cx('titleWrapper')}>
            <h1>{projectName}</h1>
            <div className={cx('linkIconsWrapper')}>
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noreferrer">
                  <GithubIcon width="1rem" height="1rem" fill="white" />
                </a>
              )}
              {linkUrl && (
                <a href={linkUrl} target="_blank" rel="noreferrer">
                  <LinkIcon width="1rem" height="1rem" fill="white" />
                </a>
              )}
            </div>
          </div>
          <span className={cx('companyName')}>{companyName}</span>
          <span>{`${startDate} - ${endDate}`}</span>
          <p>{summary}</p>
        </div>
        <div className={cx('descriptionContainer')}>
          <div className={cx('previewContainer')}>
            <Image
              src={previewPath || '/images/dummy_item.png'}
              alt={`${projectName} project preview`}
              width={280}
              height={200}
            />
          </div>
          <div className={cx('textContainer')}>
            <div className={cx('tagsContainer')}>
              {tags.map((tag) => (
                <div className={cx('tag')} key={tag}>
                  {tag}
                </div>
              ))}
            </div>
            <ul>
              {descriptions.map((description) => (
                <li
                  key={description}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              ))}
            </ul>
          </div>
        </div>
        <button type="button" onClick={openModal}>
          Learn More
        </button>
      </div>
      {isModalOpen && <ProjectModal onClose={closeModal} />}
    </div>
  )
}

export default ProjectCard
