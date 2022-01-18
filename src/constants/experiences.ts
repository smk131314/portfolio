interface ExperienceType {
  name: string
  role: string
  startDate: string
  endDate: string
  companyDescription: string
  companyLink: string | null
  tags: string[]
  description: string[]
}

export const EXPERIENCES: ExperienceType[] = [
  {
    name: 'FreeD Group',
    role: 'Frontend Developer',
    startDate: '12. 2020',
    endDate: '08. 2021',
    companyDescription:
      'FreeD Group services global travel web platform based ai chatbot api',
    companyLink: 'https://www.freed.group/',
    tags: [
      'Web App',
      'E-commerce',
      'Web App',
      'E-commerce',
      'Web App',
      'E-commerce',
    ],
    description: [
      'Implemented and deployed websites, web applications, and RCS chatbot for a travel platform and E-commerce projects.',
      'Improved performance on the main page.',
      'Participated in code review with colleague frontend developers',
    ],
  },
  {
    name: 'Wemap',
    role: 'Frontend Developer',
    startDate: '',
    endDate: '',
    companyDescription: '',
    companyLink: null,
    tags: [''],
    description: [''],
  },
  {
    name: 'Toonit',
    role: 'Frontend Developer',
    startDate: '',
    endDate: '',
    companyDescription: '',
    companyLink: null,
    tags: [''],
    description: [''],
  },
]
