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
    link: '/main',
    title: 'Home'
  },
  experience: {
    id: 'experience',
    link: '/main#experience',
    title: 'Experience'
  },
  projects: {
    id: 'projects',
    link: '/main#projects',
    title: 'Projects',
  },
  aboutMe: {
    id: 'aboutMe',
    link: '/main#aboutMe',
    title: 'About me'
  }
}