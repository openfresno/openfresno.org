export const MoonLightSchool = ({
	width = 64,
	height = 64,
	className = ''
}) => {
	return (
		<svg
			width={width}
			height={height}
			className={className}
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="32" cy="32" r="32" fill="white" />
			<path
				d="M45.3333 28.0001L32 22.6667L18.6666 28.0001L32 33.3334L45.3333 28.0001ZM45.3333 28.0001V36.0001M24 30.1334V37.3334C24 38.3942 24.8428 39.4117 26.3431 40.1618C27.8434 40.912 29.8782 41.3334 32 41.3334C34.1217 41.3334 36.1565 40.912 37.6568 40.1618C39.1571 39.4117 40 38.3942 40 37.3334V30.1334"
				stroke="black"
				strokeWidth="2.63889"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
