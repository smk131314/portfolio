import type { NextPage } from 'next'
import Head from 'next/head'
import MainHeader from '@components/layout/MainHeader'
import MainHome from '@components/mainHome'
import ExperienceSection from '@src/components/ExperienceSection'
import ProjectsSection from '@src/components/ProjectsSection'
import AboutMeSection from '@src/components/AboutMeSection'
import NavProvider from '@src/context/NavContext'

const Main: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Seungmin Kim Portfolio</title>
        <meta name="description" content="Seungmin Kim portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavProvider>
        <MainHeader />
        <main>
          <MainHome />
          <ExperienceSection />
          <ProjectsSection />
          <AboutMeSection />
        </main>
      </NavProvider>
    </div>
  )
}

export default Main
