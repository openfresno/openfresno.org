export const HamburgerStaggered = ({
                                     width = 44,
                                     height = 44,
                                     className = ""
                                   }) => {
  return (
    <svg
      width={width}
      height={height}
      className={`inline ${className}`}
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#004491"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24.625 33H36M10 11H36H10ZM10 22H36H10Z" stroke="#060718" />
    </svg>
  );
};
