interface selectAnswer {
	id: number
	title: string
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
		title: 'questions.question-one',
		questionTypeSelect: false,
		selectAnswers: [],
	},
	{
		id: 2,
		title: 'questions.question-two',
		questionTypeSelect: false,
		selectAnswers: [],
	},
	{
		id: 3,
		title: 'questions.question-three',
		questionTypeSelect: false,
		selectAnswers: [],
	},
	{
		id: 4,
		title: 'questions.question-four',
		questionTypeSelect: false,
		selectAnswers: [],
	},
	{
		id: 5,
		title: 'questions.question-five',
		questionTypeSelect: false,
		selectAnswers: [],
	},
	{
		id: 6,
		title: 'questions.question-six',
		questionTypeSelect: false,
		selectAnswers: [],
	},
	{
		id: 7,
		title: 'questions.question-seven',
		questionTypeSelect: false,
		selectAnswers: [],
	},
	{
		id: 8,
		title: 'questions.question-eight',
		questionTypeSelect: false,
		selectAnswers: [],
	},
	{
		id: 9,
		title: 'questions.question-nine',
		questionTypeSelect: false,
		selectAnswers: [],
	},
	{
		id: 10,
		title: 'questions.question-ten',
		questionTypeSelect: false,
		selectAnswers: [],
	},
]
