export const Hamburger = ({
	width = 32,
	height = 33,
	className = '',
	color = 'white'
}) => {
	return (
		<svg
			width={width}
			height={height}
			className={className}
			viewBox="0 0 32 33"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
		>
			<path
				d="M5.33325 8.5H26.6666M5.33325 16.5H26.6666M5.33325 24.5H26.6666"
				stroke={color}
				strokeWidth="2.66667"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
