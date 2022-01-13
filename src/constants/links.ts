interface LinkType  {
  id: string
  link: string
  title: string
}
type LinksObjectType = {
  [index: string]: LinkType
}
export const LINKS: LinksObjectType = {
  MAIN: {
    id: 'main',
    link: '/',
    title: 'Home'
  },
  EXPERIENCE: {
    id: 'experience',
    link: '#experience',
    title: 'Experience'
  },
  PROJECTS: {
    id: 'projects',
    link: '#projects',
    title: 'Projects',
  },
  ABOUTME: {
    id: 'aboutMe',
    link: '#aboutMe',
    title: 'About me'
  }
}