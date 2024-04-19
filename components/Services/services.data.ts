import img_1 from '~/assets/img/services/services-ui-ux.png'
import img_2 from '~/assets/img/services/services-it-consulting.png'
import img_3 from '~/assets/img/services/services-it-integration.png'
import img_4 from '~/assets/img/services/services-it-investments.png'
import img_5 from '~/assets/img/services/services-startup.png'
import img_6 from '~/assets/img/services/services-acceleration.png'
import img_7 from '~/assets/img/services/services-it-development.png'
import img_8 from '~/assets/img/services/services-ai.png'

interface ITagsObject {
  tag_one: string
  tag_two: string
  tag_three: string
}
export interface IServicesList {
  id: number
  title: string
  tags: ITagsObject
  text: string
  deadline: string
  image: string
}

export const servicesData: IServicesList[] = [
  {
    id: 1,
    title: "services.items.item-one.title",
    tags: {
      tag_one: "services.items.item-one.tags.tag_one",
      tag_two: "services.items.item-one.tags.tag_two",
      tag_three: "services.items.item-one.tags.tag_three"
    },
    text: "services.items.item-one.text",
    deadline: "services.items.item-one.deadline",
    image: img_1
  },
  {
    id: 2,
    title: "services.items.item-two.title",
    tags: {
      tag_one: "services.items.item-two.tags.tag_one",
      tag_two: "services.items.item-two.tags.tag_two",
      tag_three: "services.items.item-two.tags.tag_three"
    },
    text: "services.items.item-two.text",
    deadline: "services.items.item-two.deadline",
    image: img_2
  },
  {
    id: 3,
    title: "services.items.item-three.title",
    tags: {
      tag_one: "services.items.item-three.tags.tag_one",
      tag_two: "services.items.item-three.tags.tag_two",
      tag_three: "services.items.item-three.tags.tag_three"
    },
    text: "services.items.item-three.text",
    deadline: "services.items.item-three.deadline",
    image: img_3
  },
  {
    id: 4,
    title: "services.items.item-four.title",
    tags: {
      tag_one: "services.items.item-four.tags.tag_one",
      tag_two: "services.items.item-four.tags.tag_two",
      tag_three: "services.items.item-four.tags.tag_three"
    },
    text: "services.items.item-four.text",
    deadline: "services.items.item-four.deadline",
    image: img_4
  },
  {
    id: 5,
    title: "services.items.item-five.title",
    tags: {
      tag_one: "services.items.item-five.tags.tag_one",
      tag_two: "services.items.item-five.tags.tag_two",
      tag_three: "services.items.item-five.tags.tag_three"
    },
    text: "services.items.item-five.text",
    deadline: "services.items.item-five.deadline",
    image: img_5
  },
  {
    id: 6,
    title: "services.items.item-six.title",
    tags: {
      tag_one: "services.items.item-six.tags.tag_one",
      tag_two: "services.items.item-six.tags.tag_two",
      tag_three: "services.items.item-six.tags.tag_three"
    },
    text: "services.items.item-six.text",
    deadline: "services.items.item-six.deadline",
    image: img_6
  },
  {
    id: 7,
    title: "services.items.item-seven.title",
    tags: {
      tag_one: "services.items.item-seven.tags.tag_one",
      tag_two: "services.items.item-seven.tags.tag_two",
      tag_three: "services.items.item-seven.tags.tag_three"
    },
    text: "services.items.item-seven.text",
    deadline: "services.items.item-seven.deadline",
    image: img_7
  },
  {
    id: 8,
    title: "services.items.item-eight.title",
    tags: {
      tag_one: "services.items.item-eight.tags.tag_one",
      tag_two: "services.items.item-eight.tags.tag_two",
      tag_three: "services.items.item-eight.tags.tag_three"
    },
    text: "services.items.item-eight.text",
    deadline: "services.items.item-eight.deadline",
    image: img_8
  },
]
