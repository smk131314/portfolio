import React from 'react'
import classNames from 'classNames/bind'
import styles from '@styles/ProjectsSection.module.scss'
import { LINKS } from '@src/constants/links'
import { PROJECTS } from '@src/constants/projects'
import { useNav } from '@src/hooks/useNav'
import ProjectCard from './ProjectCard'

const cx = classNames.bind(styles)

const ProjectsSection = () => {
  const projectsRef = useNav(LINKS.PROJECTS.id)

  return (
    <section
      id={LINKS.PROJECTS.id}
      className={cx('projectSection')}
      ref={projectsRef}
    >
      <h1>Projects</h1>
      <div className={cx('projectsContainer')}>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            infoObj={project}
            isRightAligned={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
