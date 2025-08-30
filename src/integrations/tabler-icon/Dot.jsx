export const Dot = ({ width = 9, height = 9, className = '' }) => {
	return (
		<svg
			width={width}
			height={height}
			className={className}
			viewBox="0 0 9 9"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.5 9C5.69347 9 6.83807 8.5259 7.68198 7.68198C8.5259 6.83807 9 5.69347 9 4.5C9 3.30653 8.5259 2.16193 7.68198 1.31802C6.83807 0.474105 5.69347 0 4.5 0C3.30653 0 2.16193 0.474105 1.31802 1.31802C0.474105 2.16193 0 3.30653 0 4.5C0 5.69347 0.474105 6.83807 1.31802 7.68198C2.16193 8.5259 3.30653 9 4.5 9Z"
				fill="currentColor"
			/>
		</svg>
	)
}
