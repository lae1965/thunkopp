import { AnimalList } from '../AnimalList/AnimalList'
import { ArrowLeft } from '../Icons/ArrowLeft'
import { ArrowRight } from '../Icons/ArrowRight'
import styles from './Main.module.css'

export const Main = () => {
	return (
		<main className={styles.wrapper}>
			<h1 className={styles.heading}>Полезные материалы</h1>
			<p className={styles.description}>
				Собрали для вас полезные исследования схемы кормления и другие
				материалы, которые пригодятся для лучших результатов на вашем хозяйстве
			</p>
			<AnimalList />
			<div className={styles.arrow}>
				<button type='button'>
					<ArrowLeft />
				</button>
				<button type='button'>
					<ArrowRight />
				</button>
			</div>
		</main>
	)
}
