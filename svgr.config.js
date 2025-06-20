/** @type {import('@svgr/core').Config} */
module.exports = {
  typescript: true,
  icon: true,
  svgProps: {
    "aria-hidden": "true",
    fill: "currentColor",
  },
  prettier: true,
  expandProps: "end",
  replaceAttrValues: {
    "#000": "currentColor",
    "#000000": "currentColor",
    black: "currentColor",
    inherit: "currentColor",
    "#304859": "currentColor",
    "#fff": "currentColor",
  },
};
