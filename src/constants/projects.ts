export interface ProjectType {
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
}

export const PROJECTS: ProjectType[] = [
  {
    projectName: 'Ara 3.1',
    companyName: 'FreeD Group',
    role: 'Frontend Developer',
    startDate: '11.2020',
    endDate: '12.2020',
    summary: 'E-commerce web application for travel-related tickets and household goods.',
    githubLink: 'test',
    linkUrl: 'test',
    tags: ['Vue.js', 'Nuxt.js', 'Vuex', 'Vuetify', 'AWS'],
    descriptions: [
      '<p>Develop code for updated <b>responsive</b> UI design</p>',
      '<p>Implement social login and social sign up with <b>Oauth 2.0</b></p>',
      '<p>Develop and maintain frontend code</p>',
      '<p>Improve <b>performance</b> on the main page</p>',
      '<p>Deploy using <b>AWS</b> service</p>',
    ],
    previewPath: ''
  }, {
    projectName: 'Ara 3.2',
    companyName: 'FreeD Group',
    role: 'Frontend Developer',
    startDate: '11.2020',
    endDate: '12.2020',
    summary: 'E-commerce web application for travel-related tickets and household goods.',
    githubLink: 'r',
    linkUrl: 'r',
    tags: ['Vue.js', 'Nuxt.js', 'Vuex', 'Vuetify', 'AWS'],
    descriptions: [
      '<p>Develop code for updated <b>responsive</b> UI design</p>',
      '<p>Implement social login and social sign up with <b>Oauth 2.0</b></p>',
      '<p>Develop and maintain frontend code</p>',
      '<p>Improve <b>performance</b> on the main page</p>',
      '<p>Deploy using <b>AWS</b> service</p>',
    ],
    previewPath: ''
  }
]
