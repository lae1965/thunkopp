import {
	HTMLAttributes,
	MutableRefObject,
	useEffect,
	useRef,
	useState
} from 'react'
import styles from './Animal.module.css'
import { Card } from '../../data/mockData'

interface IAnimalComponent extends HTMLAttributes<HTMLElement> {
	item: Card
	index: number
	isLeaf: boolean
	animalRefs: MutableRefObject<HTMLElement[]>
}

export const Animal: React.FC<IAnimalComponent> = ({
	item,
	index,
	isLeaf,
	animalRefs
}) => {
	const animalRef = useRef(null)
	const [imgSize, setImgSize] = useState<number>(0)

	useEffect(() => {
		const handleResize = () => {
			setImgSize(
				+getComputedStyle(document.documentElement)
					.getPropertyValue('--img-size')
					.slice(0, -2)
			)
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	useEffect(() => {
		if (animalRef.current) animalRefs.current[index] = animalRef.current
	}, [animalRefs, index])

	return (
		<article
			style={{ width: `${item.title.length > 35 ? imgSize * 2 : imgSize}px` }}
			ref={animalRef}
		>
			<img
				src={item.img}
				alt={item.img}
				className={`${styles.image} ${
					isLeaf ? styles.leafWrapper : styles.circuleWrapper
				}`}
			/>
			<h2 className={styles.title}>{item.title}</h2>
			<p className={styles.date}>{item.date}</p>
		</article>
	)
}
