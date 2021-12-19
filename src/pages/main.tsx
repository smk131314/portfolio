import type { NextPage } from 'next'
import Link from 'next/link'
import MainHeader from '@components/layout/MainHeader'
import MainHome from '@components/mainHome'
import ExperienceSection from '@src/components/ExperienceSection'
import ProjectsSection from '@src/components/ProjectsSection'
import AboutMeSection from '@src/components/AboutMeSection'

const Main: NextPage = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <MainHome />
        <ExperienceSection />
        <ProjectsSection />
        <AboutMeSection />
      </main>
    </div>
  )
}

export default Main