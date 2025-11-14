import React from "react";

export const Envelope = ({
                           width = 17,
                           height = 16,
                           className = "",
                           ...props
                         }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="envelope" clipPath="url(#clip0_756_3912)">
        <path
          id="Vector"
          d="M16 12.4004C15.9999 12.692 15.8839 12.9715 15.6777 13.1777C15.4715 13.3839 15.192 13.4999 14.9004 13.5H2.09961C1.84462 13.4999 1.59891 13.4111 1.40332 13.251L1.32227 13.1777C1.11607 12.9715 1.0001 12.692 1 12.4004V5.07324L7.21387 10.3926L7.22656 10.4033L7.23926 10.4121C7.55423 10.6488 7.92886 10.7903 8.31934 10.8213L8.4873 10.8281H8.48926C8.9646 10.8254 9.42613 10.6677 9.80371 10.3789L9.8252 10.3613L16 5.07324V12.4004ZM14.8975 2.5L14.9932 2.50488C14.9958 2.50513 14.9984 2.5056 15.001 2.50586L8.5 8.07227L1.99805 2.50586C2.00098 2.50556 2.0039 2.50516 2.00684 2.50488L2.10254 2.5H14.8975Z"
          fill="#6C757D"
          stroke="#6C757D"
        />
      </g>
      <defs>
        <clipPath id="clip0_756_3912">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
