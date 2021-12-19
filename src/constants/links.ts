type LinkType = {
  id: string;
  link: string;
  title: string;
}
type LinksObjectType = {
  [index: string]: LinkType;
}
export const LINKS: LinksObjectType = {
  main: {
    id: 'main',
    link: '/',
    title: 'Home'
  },
  experience: {
    id: 'experience',
    link: '#experience',
    title: 'Experience'
  },
  projects: {
    id: 'projects',
    link: '#projects',
    title: 'Projects',
  },
  aboutMe: {
    id: 'aboutMe',
    link: '#aboutMe',
    title: 'About me'
  }
}