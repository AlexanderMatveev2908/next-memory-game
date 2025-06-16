import * as React from "react";
import type { SVGProps } from "react";
const SvgGamePad = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    aria-hidden="true"
    fill="inherit"
    {...props}
  >
    <path
      fill="inherit"
      fillRule="evenodd"
      d="M18 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm2-1v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2H8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7V4a2 2 0 0 1 2-2h2a1 1 0 0 0 1-1V0h2v2a2 2 0 0 1-2 2h-2a1 1 0 0 0-1 1v1h7a2 2 0 0 1 2 2m-5 2h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-7 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1"
    />
  </svg>
);
export default SvgGamePad;
