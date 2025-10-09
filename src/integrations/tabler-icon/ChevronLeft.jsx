export const ChevronLeft = ({ width = 24, height = 24, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      className={`inline ${className}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#004491"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 6l-6 6l6 6" />
    </svg>
  );
};
