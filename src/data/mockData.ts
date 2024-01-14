export interface Card {
	id: number
	types: string
	img: string
	title: string
	date: string
	isLeaf?: boolean
}

const data: Card[] = [
	{
		id: 1,
		types: 'type__1',
		img: '/img/combain.png',
		title: 'Как повысить удои коров',
		date: '22 ноября 2023'
	},
	{
		id: 2,
		types: 'type__2',
		img: '/img/white-cow.jpeg',
		title:
			'Как повысить удои коров: факторы, от которых зависит молочная продуктивность',
		date: '22 ноября 2023'
	},
	{
		id: 3,
		types: 'type__3',
		img: '/img/cow.png',
		title: 'Как повысить удои коров',
		date: '22 ноября 2023'
	},
	{
		id: 4,
		types: 'type__4',
		img: '/img/pigs.png',
		title: 'Как повысить прирост веса свиней',
		date: '22 ноября 2023'
	},
	{
		id: 5,
		types: 'type__5',
		img: '/img/goat.png',
		title: 'Залог успеха - забота и качественный комбикорм',
		date: '22 ноября 2023'
	},
	{
		id: 6,
		types: 'types__6',
		img: 'https://celes.club/uploads/posts/2021-12/1640090749_5-celes-club-p-zhivotnie-v-derevne-zhivotnie-krasivo-foto-6.jpg',
		title: 'usefulMaterial',
		date: '12 февраля 2024'
	},
	{
		id: 7,
		types: 'types__7',
		img: 'https://celes.club/uploads/posts/2021-12/1640090810_4-celes-club-p-zhivotnie-v-derevne-zhivotnie-krasivo-foto-4.jpg',
		title: 'usefulMaterial',
		date: '12 февраля 2024'
	},
	{
		id: 8,
		types: 'types__8',
		img: 'https://celes.club/uploads/posts/2021-12/1640090779_2-celes-club-p-zhivotnie-v-derevne-zhivotnie-krasivo-foto-2.jpg',
		title: 'usefulMaterial',
		date: '12 февраля 2024'
	},
	{
		id: 9,
		types: 'types__9',
		img: 'https://celes.club/uploads/posts/2021-12/1640090778_3-celes-club-p-zhivotnie-v-derevne-zhivotnie-krasivo-foto-3.jpg',
		title: 'usefulMaterial',
		date: '12 февраля 2024'
	},
	{
		id: 10,
		types: 'types__10',
		img: 'https://celes.club/uploads/posts/2021-12/1640090732_1-celes-club-p-zhivotnie-v-derevne-zhivotnie-krasivo-foto-1.jpg',
		title: 'usefulMaterial',
		date: '12 февраля 2024'
	}
]

export default data
