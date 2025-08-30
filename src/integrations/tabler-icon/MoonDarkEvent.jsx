export const MoonDarkEvent = ({ width = 64, height = 64, className = '' }) => {
	return (
		<svg
			width={width}
			height={height}
			className={className}
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="32" cy="32" r="32" fill="#1E2223" />
			<path
				d="M28.82 42.6666H25.3333C24.626 42.6666 23.9478 42.3856 23.4477 41.8855C22.9476 41.3854 22.6666 40.7072 22.6666 39.9999V23.9999C22.6666 23.2927 22.9476 22.6144 23.4477 22.1143C23.9478 21.6142 24.626 21.3333 25.3333 21.3333H36C36.7072 21.3333 37.3855 21.6142 37.8856 22.1143C38.3857 22.6144 38.6666 23.2927 38.6666 23.9999V34.6666M34.6666 41.3333L37.3333 43.9999L42.6666 38.6666M28 26.6666H33.3333M28 31.9999H30.6666"
				stroke="white"
				strokeWidth="2.66667"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
