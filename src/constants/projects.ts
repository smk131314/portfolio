export interface ProjectType {
  id: string
  projectName: string
  companyName: string
  role: string
  startDate: string
  endDate: string
  summary: string
  githubLink: string
  linkUrl: string
  tags: string[]
  descriptions: string[]
  previewPath: string
  imagePath: string
}

export const PROJECTS: ProjectType[] = [
  {
    id: 'portfolio',
    projectName: 'Personal Portfolio',
    companyName: '',
    role: 'Front End Developer, Design',
    startDate: '12.2021',
    endDate: '02.2022',
    summary: 'Developed and Designed entire portflio website',
    githubLink: 'https://github.com/smk131314/portfolio',
    linkUrl: '',
    tags: ['React', 'Next', 'Threejs', 'Figma', 'Spline', 'TypeScript'],
    descriptions: [
      '<p>Developed code for portfolio website</p>',
      '<p><b>Designed</b> entire portfolio website</p>',
      '<p>Created <b>3D modeling</b> file with free 3D icon assets</p>',
      '<p>Implemented a basic <b>animation</b> of 3D modelings</p>',
    ],
    previewPath: '/images/portfolio_preview.PNG',
    imagePath: '',
  },
  {
    id: 'ara',
    projectName: 'Ara',
    companyName: 'FreeD Group',
    role: 'Front End Developer',
    startDate: '',
    endDate: '',
    summary:
      'E-commerce web application for travel-related tickets and household goods.',
    githubLink: '',
    linkUrl: 'https://ara.travelflan.com/',
    tags: ['Vue.js', 'Nuxt.js', 'Vuex', 'Vuetify', 'AWS'],
    descriptions: [
      '<p>Developed code for updated <b>responsive</b> UI design</p>',
      '<p>Implemented social login and social sign up with <b>Oauth 2.0</b></p>',
      '<p>Developed and maintained front end code</p>',
      '<p>Improved <b>performance</b> on the main page</p>',
      '<p>Deployed using <b>AWS</b> service</p>',
    ],
    previewPath: '/images/ara_preview.png',
    imagePath: '/images/ara_more.png',
  },
  {
    id: 'ssocrates',
    projectName: 'Ssocrates tteok-bokki',
    companyName: 'FreeD Group',
    role: 'Front End Developer',
    startDate: '',
    endDate: '',
    summary: 'Updated web application for RCS Smart Order Chatbot Service',
    githubLink: '',
    linkUrl: 'https://ara.live/',
    tags: ['Vue.js', 'Nuxt.js', 'Vuex', 'Vuetify', 'Tailwind'],
    descriptions: [
      '<p>Developed code for updated <b>responsive</b> UI design</p>',
      '<p>Developed code for back-office website</p>',
      '<p>Implemented cart and order logic with <b>REST APIs</b> in the chatbot</p>',
      '<p>Implemented delivery address related logic with <b>third-party APIs</b></p>',
    ],
    previewPath: '/images/ssocrates_preview.PNG',
    imagePath: '/images/ssocrates_more.png',
  },
  {
    id: 'fifa',
    projectName: '2022 FIFA Hospitality',
    companyName: 'FreeD Group',
    role: 'Front End Developer',
    startDate: '',
    endDate: '',
    summary:
      'FIFA World Cup Qatar 2022 official hospitality package promotion and sales website',
    githubLink: '',
    linkUrl: 'https://events.travelflan.com/sg/fifaworldcuphospitality',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Bootstrap', 'Aphrodite'],
    descriptions: [
      '<p>Developed and maintained frontend code</p>',
      '<p>Implemented an updated function for <b>Singapore</b> version</p>',
      '<p>Develop code for an <b>email template</b></p>',
    ],
    previewPath: '/images/fifa_preview.png',
    imagePath: '/images/fifa_more.png',
  },
  {
    id: 'tripcody',
    projectName: 'TripCody',
    companyName: 'FreeD Group',
    role: 'Front End Developer',
    startDate: '',
    endDate: '',
    summary: 'Travel Concierge platform',
    githubLink: '',
    linkUrl: '',
    tags: ['Vue.js', 'Nuxt.js', 'Vuex', 'Vuetify', 'SASS', 'Alibaba cloud'],
    descriptions: [
      '<p>Implemented <b>e-commerce</b> function including ticket reservation and overseas purchase</p>',
      '<p>Developed code for <b>back-office</b> website including product, order management, and separation of functions by authority</p>',
      '<p>Implemented the service main page <b>by country</b></p>',
      '<p>Deploy using <b>Alibaba cloud</b> service</p>',
    ],
    previewPath: '/images/tripcody_preview.png',
    imagePath: '/images/tripcody_more.png',
  },
  {
    id: 'nodetolink',
    projectName: 'Node to link',
    companyName: 'wemap',
    role: 'Software Engineer',
    startDate: '',
    endDate: '',
    summary: 'QGIS plugin for editing geometric node & link data',
    githubLink: 'https://github.com/smk131314/node_to_link',
    linkUrl: '',
    tags: ['Python', 'PyQGIS', 'PyQt', 'QGIS', 'Adobe illustrator'],
    descriptions: [
      '<p>Implemented plugin for editing <b>geometric data</b> in an internal database</p>',
      '<p>Created custom icon using Adobe illustrator</p>',
    ],
    previewPath: '',
    imagePath: '',
  },
]
