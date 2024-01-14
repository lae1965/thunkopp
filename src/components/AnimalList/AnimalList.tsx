import { HTMLAttributes, MutableRefObject, RefObject } from 'react'
import data from '../../data/mockData'
import { booleanGenerator } from '../../util/booleanGenerator'
import { Animal } from '../Animal/Animal'
import styles from './AnimalList.module.css'

interface IAnimalList extends HTMLAttributes<HTMLDivElement> {
	animalListRef: RefObject<HTMLDivElement>
	animalRefs: MutableRefObject<HTMLElement[]>
}

export const AnimalList: React.FC<IAnimalList> = ({
	animalListRef,
	animalRefs
}) => {
	const getIsLeaf = (index: number): boolean => {
		if (data[index].isLeaf === undefined) {
			if (index === 0 || data[index - 1].isLeaf)
				data[index].isLeaf = booleanGenerator()
			else data[index].isLeaf = true
		}
		return data[index].isLeaf!
	}
	return (
		<div className={styles.list} ref={animalListRef}>
			{data.map((item, index) => (
				<Animal
					item={item}
					index={index}
					key={item.id}
					isLeaf={getIsLeaf(index)}
					animalRefs={animalRefs}
				/>
			))}
		</div>
	)
}
