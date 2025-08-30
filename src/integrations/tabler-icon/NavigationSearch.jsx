export const NavigationSearch = ({
	width = 24,
	height = 24,
	className = ''
}) => {
	return (
		<svg
			width={width}
			height={height}
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15.876 11.403L12 3L4.02997 20.275C3.95997 20.475 4.01297 20.699 4.16497 20.847C4.31497 20.995 4.53897 21.04 4.73497 20.963L11.025 18.831M20.2002 20.2002L22.0002 22.0002M15 18C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 17.2044 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15C17.2044 15 16.4413 15.3161 15.8787 15.8787C15.3161 16.4413 15 17.2044 15 18Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
