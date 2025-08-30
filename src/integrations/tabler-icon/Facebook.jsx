import React from 'react'

export const Facebook = ({
	width = 24,
	height = 24,
	className = '',
	...props
}) => {
	return (
		<svg
			width={width}
			height={height}
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g id="facebook">
				<path
					id="Vector"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M12.8433 5.16823H16V2H13.4107C12.2632 2.0014 11.1631 2.46271 10.3518 3.28274C9.54037 4.10277 9.08393 5.21457 9.08255 6.37427V8.33647H7V11.5047H9.08986V22H12.2247V11.5047H15.3814L16 8.33647H12.2247V5.79238C12.2271 5.62743 12.2931 5.46994 12.4086 5.35339C12.5241 5.23684 12.68 5.17041 12.8433 5.16823Z"
					fill="#6C757D"
				/>
			</g>
		</svg>
	)
}
