export interface ExperienceType {
  id: string
  companyName: string
  role: string
  startDate: string
  endDate: string
  companyDescription: string
  companyLink: string
  tags: string[]
  descriptions: string[]
}

export const EXPERIENCES: ExperienceType[] = [
  {
    id: 'toonit',
    companyName: 'Toonit',
    role: 'Front End Developer',
    startDate: '09. 2021',
    endDate: '01. 2022',
    companyDescription:
      'TOONIT provides a webtoon automation solution and publishing platform that allows users to quickly and easily create their original content without having any illustration skills.',
    companyLink: 'https://toonit.com/',
    tags: [
      'WebGL',
      'React',
      'Redux',
      'TypeScript',
      'HTML5',
      'CSS3',
      'CSS Module',
      'Babylon js',
      'Figma',
      'Bitbucket',
      'Jira',
      'Slack',
      'Confluence',
    ],
    descriptions: [
      '<p>Implemented a webtoon automation solution and publishing platform with <b>WebGL-based</b> for a closed-beta release that lives globally.</p>',
      '<p>Altered and Revamped <b>user experience</b> of Toonit platform.</p>',
      '<p>Integrated and Extended 3rd party photo editor API using web <b>canvas API</b> and created customized <b>editing tools</b> including blur effect, brushes.</p>',
      '<p>Constructed login authorization and sharing module with social media <b>Oauth</b> API like Google, Facebook, Snapchat.</p>',
      '<p>Implemented <b>payment</b> module with PayPal, Kakaopay.</p>',
    ],
  },
  {
    id: 'freedGroup',
    companyName: 'FreeD Group',
    role: 'Front End Developer',
    startDate: '12. 2020',
    endDate: '08. 2021',
    companyDescription:
      'FREED GROUP is an award-winning AI Digital and Smart Merchandising Solution Company utilizing Artificial Intelligence(AI), Big Data and Machine Learning technologies to provide end-2-end digital solutions, headquartered in Hong Kong with more than 10 offices globally',
    companyLink: 'https://www.freed.group/',
    tags: [
      'chatbot',
      'E-commerce',
      'Vue.js',
      'Nuxt.js',
      'Vuex',
      'Vuetify',
      'React',
      'Next.js',
      'Redux',
      'TypeScript',
      'Material-UI',
      'HTML5',
      'CSS3',
      'SCSS',
      'tailwind',
      'Alibaba cloud',
      'AWS',
      'Git',
      'Azure DevOps',
      'MS teams',
      'chart js',
    ],
    descriptions: [
      '<p>Implemented and deployed <b>4+ responsive web applications</b> and front end part of <b>AI chatbot</b> for Hybrid SaaS solutions and services like Travel Concierge platform and Smart Merchandising.</p>',
      '<p>Daily maintenance of code, <b>code review</b>, debugging issues, and solving clients’ problems with <b>8</b> front end team members.</p>',
      '<p><b>Collaborated</b> and communicated with back end developers, designers, product team members for any front end problematic issues.</p>',
      '<p>Assessed <b>UX and UI designs</b> for technical feasibility.</p>',
      '<p><b>Mentored</b> and guided <b>8</b> front end team associates under company guidelines, <b>front end basics</b>, and supervised team members’ tasks driving projects.</p>',
    ],
  },
  {
    id: 'wemap',
    companyName: 'Wemap',
    role: 'Software Engineer',
    startDate: '05. 2020',
    endDate: '12. 2020',
    companyDescription: '',
    companyLink: '',
    tags: [
      'Mapbox GL JS',
      'Python',
      'PostGIS',
      'PyQGIS',
      'PyQt',
      'QGIS',
      'Adobe illustrator',
    ],
    descriptions: [
      '<p>Managed and wrote queries for <b>spatial data</b> processing using PostGIS.</p>',
      '<p>Handled converting spatial data into customized 3d web maps using <b>Mapbox GL JS</b>.</p>',
      '<p>Created <b>QGIS plugin</b> for editing geometric node & link data using Python, PyQGIS, PyQt.</p>',
      '<p>Programmed Python scripts that create geometric link data from parsed Exif data and automatically upload to DataBase using <b>Python, PostGIS</b>.</p>',
    ],
  },
]

type IconInfoObjectType = {
  iconName: string
  color: string
}
type IconInfoType = {
  [index: string]: IconInfoObjectType
}

export const ICON_INFO: IconInfoType = {
  freedGroup: {
    iconName: 'Travel',
    color: '#4654C8',
  },
  wemap: {
    iconName: 'MapPin',
    color: '#DF769C',
  },
  toonit: {
    iconName: 'VideoCamera',
    color: '#43F558',
  },
}
