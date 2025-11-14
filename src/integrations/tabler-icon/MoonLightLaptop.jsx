export const MoonLightLaptop = ({
                                  width = 64,
                                  height = 64,
                                  className = ""
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
        d="M20 41.3333H44M22.6667 25.3333C22.6667 24.9797 22.8071 24.6406 23.0572 24.3905C23.3072 24.1405 23.6464 24 24 24H40C40.3536 24 40.6928 24.1405 40.9428 24.3905C41.1929 24.6406 41.3333 24.9797 41.3333 25.3333V36C41.3333 36.3536 41.1929 36.6928 40.9428 36.9428C40.6928 37.1929 40.3536 37.3333 40 37.3333H24C23.6464 37.3333 23.3072 37.1929 23.0572 36.9428C22.8071 36.6928 22.6667 36.3536 22.6667 36V25.3333Z"
        stroke="black"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
