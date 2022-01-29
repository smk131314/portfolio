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
    id: 'freedGroup',
    companyName: 'FreeD Group',
    role: 'Frontend Developer',
    startDate: '12. 2020',
    endDate: '08. 2021',
    companyDescription:
      'FreeD Group services global travel web platform based ai chatbot api',
    companyLink: 'https://www.freed.group/',
    tags: ['Web App', 'E-commerce'],
    descriptions: [
      '<p>Implemented and deployed websites, <b>web applications</b>, and RCS chatbot for a travel platform and E-commerce projects.</p>',
      '<p>Improved performance on the main page.</p>',
      '<p>Participated in <b>code review</b> with colleague frontend developers</p>',
    ],
  },
  {
    id: 'wemap',
    companyName: 'Wemap',
    role: 'Frontend Developer',
    startDate: '',
    endDate: '',
    companyDescription: '',
    companyLink: '',
    tags: [''],
    descriptions: [''],
  },
  {
    id: 'toonit',
    companyName: 'Toonit',
    role: 'Frontend Developer',
    startDate: '',
    endDate: '',
    companyDescription: '',
    companyLink: '',
    tags: [''],
    descriptions: [''],
  },
]
