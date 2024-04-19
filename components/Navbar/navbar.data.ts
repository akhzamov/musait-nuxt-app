export interface INavbarList {
  id: number
  name: string
  path: string
}

export const navbarData: INavbarList[] = [
  {
    id: 1,
    name: 'nav.content.list.services',
    path: 'services'
  },
  {
    id: 2,
    name: 'nav.content.list.сases',
    path: 'cases'
  },
  {
    id: 3,
    name: 'nav.content.list.about',
    path: 'about'
  },
  {
    id: 4,
    name: 'nav.content.list.vacancies',
    path: 'vacancies'
  },
  {
    id: 5,
    name: 'nav.content.list.contacts',
    path: 'contacts'
  },
]