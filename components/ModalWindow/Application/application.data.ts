export interface IApplicationTags {
	id: number
	title: string
	value: string
	selected: boolean
}

export const applicationTags: IApplicationTags[] = [
	{
		id: 1,
		title: 'UI/UX дизайн',
		value: 'ui/ux',
		selected: false,
	},
	{
		id: 2,
		title: 'IT-интеграция',
		value: 'it-integration',
		selected: false,
	},
	{
		id: 3,
		title: 'Акселерация',
		value: 'acceleration',
		selected: false,
	},
	{
		id: 4,
		title: 'IT-инвестиции',
		value: 'it-investments',
		selected: false,
	},
	{
		id: 5,
		title: 'Внедрение AI',
		value: 'ai-integration',
		selected: false,
	},
	{
		id: 6,
		title: 'Продвижение стартапов',
		value: 'startup-promotion',
		selected: false,
	},
	{
		id: 7,
		title: 'IT-аудит и консалтинг',
		value: 'it-auditing',
		selected: false,
	},
]
