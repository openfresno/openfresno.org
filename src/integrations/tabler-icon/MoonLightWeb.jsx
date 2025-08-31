export const MoonLightWeb = ({ width = 64, height = 64, className = "" }) => {
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
        d="M21.3334 26.6666H42.6667M26.6667 21.3333V26.6666M21.3334 22.6666C21.3334 22.313 21.4739 21.9738 21.7239 21.7238C21.9739 21.4737 22.3131 21.3333 22.6667 21.3333H41.3334C41.687 21.3333 42.0261 21.4737 42.2762 21.7238C42.5262 21.9738 42.6667 22.313 42.6667 22.6666V41.3333C42.6667 41.6869 42.5262 42.026 42.2762 42.2761C42.0261 42.5261 41.687 42.6666 41.3334 42.6666H22.6667C22.3131 42.6666 21.9739 42.5261 21.7239 42.2761C21.4739 42.026 21.3334 41.6869 21.3334 41.3333V22.6666Z"
        stroke="black"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
