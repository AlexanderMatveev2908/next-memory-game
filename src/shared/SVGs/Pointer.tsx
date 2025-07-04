import * as React from "react";
import type { SVGProps } from "react";
const SvgPointer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <g filter="url(#pointer_svg__a)">
      <path
        fill="currentColor"
        d="M7.904 15.893c-.28-.36-.63-1.09-1.24-2-.35-.5-1.21-1.45-1.47-1.94a1.26 1.26 0 0 1-.15-1 1.32 1.32 0 0 1 1.43-1c.51.103.98.353 1.35.72q.387.366.71.79c.16.2.2.28.38.51s.3.46.21.12c-.07-.5-.19-1.34-.36-2.09-.13-.57-.16-.66-.28-1.09s-.19-.79-.32-1.28a14 14 0 0 1-.28-1.46 2.82 2.82 0 0 1 .26-1.85 1.19 1.19 0 0 1 1.3-.22c.44.326.769.78.94 1.3.262.64.437 1.313.52 2 .16 1 .47 2.46.48 2.76 0-.37-.07-1.15 0-1.5a1.07 1.07 0 0 1 .67-.8 2 2 0 0 1 .92-.06c.31.065.584.243.77.5.231.584.36 1.203.38 1.83.026-.55.12-1.093.28-1.62a1.24 1.24 0 0 1 .69-.48c.33-.06.67-.06 1 0 .27.09.508.262.68.49.211.53.34 1.09.38 1.66 0 .14.07-.39.29-.74a1.002 1.002 0 1 1 1.9.64v2.26a12 12 0 0 1-.24 1.74 6 6 0 0 1-.72 1.43 7.2 7.2 0 0 0-1.19 1.81 4 4 0 0 0-.1 1c-.001.31.039.62.12.92a6 6 0 0 1-1.23 0c-.39-.06-.87-.84-1-1.08a.38.38 0 0 0-.68 0c-.22.38-.71 1.07-1.05 1.11-.67.08-2.05 0-3.14 0 0 0 .18-1-.23-1.36s-.83-.78-1.14-1.06z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.75}
        d="M7.904 15.893c-.28-.36-.63-1.09-1.24-2-.35-.5-1.21-1.45-1.47-1.94a1.26 1.26 0 0 1-.15-1 1.32 1.32 0 0 1 1.43-1c.51.103.98.353 1.35.72q.387.366.71.79c.16.2.2.28.38.51s.3.46.21.12c-.07-.5-.19-1.34-.36-2.09-.13-.57-.16-.66-.28-1.09s-.19-.79-.32-1.28a14 14 0 0 1-.28-1.46 2.82 2.82 0 0 1 .26-1.85 1.19 1.19 0 0 1 1.3-.22c.44.326.769.78.94 1.3.262.64.437 1.313.52 2 .16 1 .47 2.46.48 2.76 0-.37-.07-1.15 0-1.5a1.07 1.07 0 0 1 .67-.8 2 2 0 0 1 .92-.06c.31.065.584.243.77.5.231.584.36 1.203.38 1.83.026-.55.12-1.093.28-1.62a1.24 1.24 0 0 1 .69-.48c.33-.06.67-.06 1 0 .27.09.508.262.68.49.211.53.34 1.09.38 1.66 0 .14.07-.39.29-.74a1.002 1.002 0 1 1 1.9.64v2.26a12 12 0 0 1-.24 1.74 6 6 0 0 1-.72 1.43 7.2 7.2 0 0 0-1.19 1.81 4 4 0 0 0-.1 1c-.001.31.039.62.12.92a6 6 0 0 1-1.23 0c-.39-.06-.87-.84-1-1.08a.38.38 0 0 0-.68 0c-.22.38-.71 1.07-1.05 1.11-.67.08-2.05 0-3.14 0 0 0 .18-1-.23-1.36s-.83-.78-1.14-1.06z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.384 16.44v-3.453a.374.374 0 0 0-.75 0v3.452a.375.375 0 0 0 .75 0M14.404 16.438l-.02-3.454a.374.374 0 0 0-.75.005l.02 3.453c0 .206.17.372.377.371a.374.374 0 0 0 .372-.375M11.634 12.992l.02 3.447a.376.376 0 1 0 .75-.005l-.02-3.446a.376.376 0 1 0-.75.004"
      />
    </g>
    <defs>
      <filter
        id="pointer_svg__a"
        width={16.746}
        height={17.859}
        x={3.825}
        y={3.625}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={0.4} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4_857" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_4_857"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgPointer;
