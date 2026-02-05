import pkg from '../package.json'

// ANSI escape codes for colors
const green = (text: string): string => `\x1b[32m${text}\x1b[0m`
const yellow = (text: string): string => `\x1b[33m${text}\x1b[0m`
const yellowBold = (text: string): string => `\x1b[1m\x1b[33m${text}\x1b[0m`

console.log(`

${green("Hey there! 👋")}

Thanks for giving the ${pkg.name} a try. 🎉
To get you going really quickly this project includes a setup step.

${yellowBold("npm run setup")} automates the following steps for you:
  - creates a config file ${yellow("./.contentful.json")}
  - imports ${green("a predefined content model")}

When this is done run:

${yellow("npm run dev")} to start a development environment at ${green("localhost:8000")}

or

${yellow("npm run build")} to create a production ready static site in ${green("./public")}

For further information check the readme of the project
(https://github.com/contentful/starter-gatsby-blog)

`)
