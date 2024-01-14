import { useEffect, useRef, useState } from 'react'
import { AnimalList } from '../AnimalList/AnimalList'
import { ArrowLeft } from '../Icons/ArrowLeft'
import { ArrowRight } from '../Icons/ArrowRight'
import styles from './Main.module.css'
import { animateScroll } from '../../util/animateScroll'
import { ArrowLeftSmall } from '../Icons/ArrowLeftSmall'
import { ArrowRightSmall } from '../Icons/ArrowRightSmall'

export const Main = () => {
	const [leftArrowDisabled, setLeftArrowDisabled] = useState<boolean>(false)
	const [rightArrowDisabled, setRightArrowDisabled] = useState<boolean>(false)
	const mainRef = useRef<HTMLElement>(null)
	const animalListRef = useRef<HTMLDivElement>(null)
	const animalRefs = useRef<HTMLElement[]>([])

	useEffect(() => {
		const handleScroll = () => {
			const mainRect = mainRef.current?.getBoundingClientRect()
			const animalRectFirst = animalRefs.current[0].getBoundingClientRect()
			const animalRectLast =
				animalRefs.current[
					animalRefs.current.length - 1
				].getBoundingClientRect()
			setLeftArrowDisabled(animalRectFirst.left >= 40)
			setRightArrowDisabled(animalRectLast.right <= mainRect!.width - 40)
		}
		handleScroll()
		animalListRef.current?.addEventListener('scroll', handleScroll)
		return () => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			animalListRef.current?.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleLeft = () => {
		const mainRect = mainRef.current?.getBoundingClientRect()
		const animals = animalRefs.current
		let scrollLength = 0
		for (let i = 0; i < animals.length; i++) {
			const animalRect = animals[i].getBoundingClientRect()
			if (mainRect!.left + 40 <= animalRect.left) {
				if (i === 0) return
				scrollLength =
					animalRect.left -
					(mainRect!.left + 40) +
					animals[i - 1].getBoundingClientRect().width +
					2
				break
			}
			if (mainRect!.left + 40 < animalRect.left + animalRect.width) {
				scrollLength = -animalRect.left + 40
				break
			}
		}

		animateScroll(animalListRef.current, scrollLength, 'left')
	}

	const handleRight = () => {
		const mainRect = mainRef.current?.getBoundingClientRect()
		const animals = animalRefs.current
		let scrollLength = 0
		const animalsLength = animals.length
		for (let i = animalsLength - 1; i >= 0; i--) {
			const animalRect = animals[i].getBoundingClientRect()
			if (mainRect!.right - 40 >= animalRect.right) {
				if (i === animalsLength - 1) return
				scrollLength =
					mainRect!.right -
					40 -
					animalRect.right +
					animals[i + 1].getBoundingClientRect().width +
					2
				break
			}
			if (mainRect!.right - 40 > animalRect.right - animalRect.width) {
				scrollLength = animalRect.right - (mainRect!.right - 40)
				break
			}
		}

		animateScroll(animalListRef.current, scrollLength, 'right')
	}

	return (
		<main id={styles.main} ref={mainRef}>
			<h1 className={styles.heading}>Полезные материалы</h1>
			<p className={styles.description}>
				Собрали для вас полезные исследования схемы кормления и другие
				материалы, которые пригодятся для лучших результатов на вашем хозяйстве
			</p>
			<AnimalList animalListRef={animalListRef} animalRefs={animalRefs} />
			<div className={styles.arrow}>
				<button type='button' onClick={handleLeft} disabled={leftArrowDisabled}>
					<div className={styles.bigArrow}>
						<ArrowLeft />
					</div>
					<div className={styles.smallArrow}>
						<ArrowLeftSmall />
					</div>
				</button>
				<button
					type='button'
					onClick={handleRight}
					disabled={rightArrowDisabled}
				>
					<div className={styles.bigArrow}>
						<ArrowRight />
					</div>
					<div className={styles.smallArrow}>
						<ArrowRightSmall />
					</div>
				</button>
			</div>
		</main>
	)
}
