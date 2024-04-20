export interface IFooterListObject {
  id: number
  text: string
}

export interface IFooterItemObject {
  id: number
  text: string
  list: IFooterListObject[]
}

export interface IFooterListIcoObject {
  id: number
  text: string
  logo: string
  link: string
  href: string
}

export interface IFooterItemIcoObject {
  id: number
  text: string
  list: IFooterListObject[]
}
