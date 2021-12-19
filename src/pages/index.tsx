import type { NextPage } from 'next'
import Head from 'next/head'
import MainHeader from '@components/layout/MainHeader'
import MainHome from '@components/mainHome'
import ExperienceSection from '@src/components/ExperienceSection'
import ProjectsSection from '@src/components/ProjectsSection'
import AboutMeSection from '@src/components/AboutMeSection'

const Main: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Seungmin Kim Portfolio</title>
        <meta name="description" content="Seungmin Kim portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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