import * as React from "react";
import type { SVGProps } from "react";
const SvgFlask = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 56 57"
    aria-hidden="true"
    {...props}
  >
    <path
      fill="currentColor"
      d="M39.374.5a2.62 2.62 0 0 1 2.625 2.625v1.75A2.62 2.62 0 0 1 39.374 7.5h-.875v16.516l12.818 20.617c3.205 5.14-.48 11.867-6.573 11.867H11.253c-6.081 0-9.778-6.716-6.573-11.867l12.819-20.617V7.5h-.875a2.62 2.62 0 0 1-2.625-2.625v-1.75A2.62 2.62 0 0 1 16.624.5zm-14.886 7V25c0 .744-.23 1.444-.634 2.013L18.582 35.5h18.813l-5.273-8.487A3.5 3.5 0 0 1 31.488 25V7.5z"
    />
    <mask
      id="flask_svg__a"
      width={50}
      height={57}
      x={3}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="currentColor"
        d="M39.374.5a2.62 2.62 0 0 1 2.625 2.625v1.75A2.62 2.62 0 0 1 39.374 7.5h-.875v16.516l12.818 20.617c3.205 5.14-.48 11.867-6.573 11.867H11.253c-6.081 0-9.778-6.716-6.573-11.867l12.819-20.617V7.5h-.875a2.62 2.62 0 0 1-2.625-2.625v-1.75A2.62 2.62 0 0 1 16.624.5zm-14.886 7V25c0 .744-.23 1.444-.634 2.013L18.582 35.5h18.813l-5.273-8.487A3.5 3.5 0 0 1 31.488 25V7.5z"
      />
    </mask>
    <g mask="url(#flask_svg__a)">
      <path fill="currentColor" d="M0 .5h56v56H0z" />
    </g>
  </svg>
);
export default SvgFlask;
