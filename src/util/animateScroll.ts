export const animateScroll = (
	HTMLObject: HTMLDivElement | null,
	scrollLength: number,
	direction: 'left' | 'right' = 'right'
) => {
	if (!scrollLength) return

	let dir: number
	let step = 6
	if (direction === 'right') dir = 1
	else dir = -1

	const intervalId = setInterval(() => {
		HTMLObject!.scrollTo({ left: HTMLObject!.scrollLeft + dir * step })
		if (scrollLength < step) step = scrollLength
		scrollLength -= step
		if (scrollLength <= 0) {
			clearInterval(intervalId)
			return
		}
	}, 1)
}
