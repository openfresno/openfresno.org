export const MoonDarkCal = ({ width = 64, height = 64, className = '' }) => {
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
				d="M37.3334 20V25.3333M26.6667 20V25.3333M21.3334 30.6667H42.6667M21.3334 25.3333C21.3334 24.6261 21.6143 23.9478 22.1144 23.4477C22.6145 22.9476 23.2928 22.6667 24 22.6667H40C40.7073 22.6667 41.3856 22.9476 41.8857 23.4477C42.3858 23.9478 42.6667 24.6261 42.6667 25.3333V41.3333C42.6667 42.0406 42.3858 42.7189 41.8857 43.219C41.3856 43.719 40.7073 44 40 44H24C23.2928 44 22.6145 43.719 22.1144 43.219C21.6143 42.7189 21.3334 42.0406 21.3334 41.3333V25.3333ZM26.6667 36H29.3334V38.6667H26.6667V36Z"
				stroke="white"
				strokeWidth="2.66667"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
