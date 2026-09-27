// Post-processing, same as the Prepros "CSS Tools" settings:
// 1. autoprefixer: adds browser prefixes (targets come from "browserslist" in package.json)
// 2. cssnano: minifies the CSS into one line
module.exports = {
  plugins: [require("autoprefixer"), require("cssnano")],
};
