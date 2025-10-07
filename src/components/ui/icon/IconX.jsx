export const IconX = ({ width = 32, height = 36, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      className={`inline ${className}`}
      viewBox="0 0 32 36"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#004491"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8L26 28M6 28L26 8L6 28Z" stroke="#060718" />
    </svg>
  );
};
