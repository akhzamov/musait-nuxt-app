interface selectAnswer {
	id: number
	title: string
	selected: boolean
}

interface IQuestionAnswersBusiness {
	id: number
	title: string
	questionTypeSelect: boolean
	selectAnswers: selectAnswer[]
}

export const questionAnswersBusinessData: IQuestionAnswersBusiness[] = [
	{
		id: 1,
		title: 'questions.question-one.title',
		questionTypeSelect: true,
		selectAnswers: [
			{
				id: 1,
				title: 'questions.question-one.select-one',
				selected: false,
			},
			{
				id: 2,
				title: 'questions.question-one.select-two',
				selected: false,
			},
			{
				id: 3,
				title: 'questions.question-one.select-three',
				selected: false,
			},
			{
				id: 4,
				title: 'questions.question-one.select-four',
				selected: false,
			},
		],
	},
	{
		id: 2,
		title: 'questions.question-two.title',
		questionTypeSelect: true,
		selectAnswers: [
			{
				id: 1,
				title: 'questions.question-two.select-one',
				selected: false,
			},
			{
				id: 2,
				title: 'questions.question-two.select-two',
				selected: false,
			},
			{
				id: 3,
				title: 'questions.question-two.select-three',
				selected: false,
			},
			{
				id: 4,
				title: 'questions.question-two.select-four',
				selected: false,
			},
		],
	},
	{
		id: 3,
		title: 'questions.question-three.title',
		questionTypeSelect: false,
		selectAnswers: [],
	},
	{
		id: 4,
		title: 'questions.question-four.title',
		questionTypeSelect: true,
		selectAnswers: [
			{
				id: 1,
				title: 'questions.question-four.select-one',
				selected: false,
			},
			{
				id: 2,
				title: 'questions.question-four.select-two',
				selected: false,
			},
			{
				id: 3,
				title: 'questions.question-four.select-three',
				selected: false,
			},
			{
				id: 4,
				title: 'questions.question-four.select-four',
				selected: false,
			},
		],
	},
	{
		id: 5,
		title: 'questions.question-five.title',
		questionTypeSelect: false,
		selectAnswers: [],
	},
	{
		id: 6,
		title: 'questions.question-seven.title',
		questionTypeSelect: false,
		selectAnswers: [],
	},
	{
		id: 7,
		title: 'questions.question-eight.title',
		questionTypeSelect: false,
		selectAnswers: [],
	},
	{
		id: 8,
		title: 'questions.question-nine.title',
		questionTypeSelect: false,
		selectAnswers: [],
	},
]
