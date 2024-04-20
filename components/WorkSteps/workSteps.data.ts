export interface IWorkStepsTasksObject {
  id: number,
  text: string
}

export interface IWorkStepsListObj {
  id: number
  title: string
  img: string
  number: number
  tasks: IWorkStepsTasksObject[]

}

import img1 from "~/assets/img/workSteps/1.svg"
import img2 from "~/assets/img/workSteps/2.svg"
import img3 from "~/assets/img/workSteps/3.svg"
import img4 from "~/assets/img/workSteps/4.svg"
import img5 from "~/assets/img/workSteps/5.svg"
import img6 from "~/assets/img/workSteps/6.svg"

export const workStepsList: IWorkStepsListObj[] = [
  {
    id: 1,
    title: 'work_steps.step_one.title',
    img: img1,
    number: 1,
    tasks: [
      {
        id: 1,
        text: "work_steps.step_one.tasks.task_one"
      },
      {
        id: 2,
        text: "work_steps.step_one.tasks.task_two"
      },
      {
        id: 3,
        text: "work_steps.step_one.tasks.task_three"
      },
    ]
  },
  {
    id: 2,
    title: 'work_steps.step_two.title',
    img: img2,
    number: 2,
    tasks: [
      {
        id: 1,
        text: "work_steps.step_two.tasks.task_one"
      },
      {
        id: 2,
        text: "work_steps.step_two.tasks.task_two"
      },
      {
        id: 3,
        text: "work_steps.step_two.tasks.task_three"
      },
    ]
  },
  {
    id: 3,
    title: 'work_steps.step_three.title',
    img: img3,
    number: 3,
    tasks: [
      {
        id: 1,
        text: "work_steps.step_three.tasks.task_one"
      },
      {
        id: 2,
        text: "work_steps.step_three.tasks.task_two"
      },
      {
        id: 3,
        text: "work_steps.step_three.tasks.task_three"
      },
    ]
  },
  {
    id: 4,
    title: 'work_steps.step_four.title',
    img: img4,
    number: 4,
    tasks: [
      {
        id: 1,
        text: "work_steps.step_four.tasks.task_one"
      },
      {
        id: 2,
        text: "work_steps.step_four.tasks.task_two"
      },
      {
        id: 3,
        text: "work_steps.step_four.tasks.task_three"
      },
    ]
  },
  {
    id: 5,
    title: 'work_steps.step_five.title',
    img: img5,
    number: 5,
    tasks: [
      {
        id: 1,
        text: "work_steps.step_five.tasks.task_one"
      },
      {
        id: 2,
        text: "work_steps.step_five.tasks.task_two"
      },
      {
        id: 3,
        text: "work_steps.step_five.tasks.task_three"
      },
    ]
  },
  {
    id: 6,
    title: 'work_steps.step_six.title',
    img: img6,
    number: 6,
    tasks: [
      {
        id: 1,
        text: "work_steps.step_six.tasks.task_one"
      },
      {
        id: 2,
        text: "work_steps.step_six.tasks.task_two"
      },
      {
        id: 3,
        text: "work_steps.step_six.tasks.task_three"
      },
    ]
  },

]