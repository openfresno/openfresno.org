export const Lock = ({ width = 24, height = 24, className = '' }) => {
	return (
		<svg
			width={width}
			height={height}
			className={className}
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
				clipRule="evenodd"
			></path>
		</svg>
	)
}
