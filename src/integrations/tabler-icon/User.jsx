export const User = ({ width = 24, height = 24, className = '' }) => {
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
				d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
				clipRule="evenodd"
			></path>
		</svg>
	)
}
