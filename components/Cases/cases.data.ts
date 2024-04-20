export interface ICasesWorkObj {
  id: number
  text: string
}

export interface ICasesItemsObj {
  id: number
  img: string
  tag: string
  title: string
  subtitle: string
  works: ICasesWorkObj[]
  benefit: string
}

import img1 from '~/assets/img/cases/aberno.png'
import img2 from '~/assets/img/cases/medicalka.png'
import img3 from '~/assets/img/cases/wms.png'
import img4 from '~/assets/img/cases/moow-motors.png'

export const casesList: ICasesItemsObj[] = [
  {
    id: 1,
    img: img1,
    tag: 'cases.case_one.tag',
    title: 'cases.case_one.title',
    subtitle: 'cases.case_one.subtitle',
    works: [
      {
        id: 1,
        text: 'cases.case_one.works.work_one'
      },
      {
        id: 2,
        text: 'cases.case_one.works.work_two'
      },
      {
        id: 3,
        text: 'cases.case_one.works.work_three'
      },
    ],
    benefit: 'cases.case_one.benefit'
  },
  {
    id: 2,
    img: img2,
    tag: 'cases.case_two.tag',
    title: 'cases.case_two.title',
    subtitle: 'cases.case_two.subtitle',
    works: [
      {
        id: 1,
        text: 'cases.case_two.works.work_one'
      },
      {
        id: 2,
        text: 'cases.case_two.works.work_two'
      },
      {
        id: 3,
        text: 'cases.case_two.works.work_three'
      },
    ],
    benefit: 'cases.case_two.benefit'
  },
  {
    id: 3,
    img: img3,
    tag: 'cases.case_three.tag',
    title: 'cases.case_three.title',
    subtitle: 'cases.case_three.subtitle',
    works: [
      {
        id: 1,
        text: 'cases.case_three.works.work_one'
      },
      {
        id: 2,
        text: 'cases.case_three.works.work_two'
      },
      {
        id: 3,
        text: 'cases.case_three.works.work_three'
      },
    ],
    benefit: 'cases.case_three.benefit'
  },
  {
    id: 4,
    img: img4,
    tag: 'cases.case_four.tag',
    title: 'cases.case_four.title',
    subtitle: 'cases.case_four.title',
    works: [
      {
        id: 1,
        text: 'cases.case_four.works.work_one'
      },
      {
        id: 2,
        text: 'cases.case_four.works.work_two'
      },
      {
        id: 3,
        text: 'cases.case_four.works.work_three'
      },
    ],
    benefit: 'cases.case_four.benefit'
  },
]