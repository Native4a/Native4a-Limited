const pkg = require("../package.json");

console.log(`

Hey there! 

Thanks for giving the ${pkg.name} a try.
To get you going really quickly this project includes a setup step.

npm run setup automates the following steps for you:
  - creates a config file ./.contentful.json
  - imports a predefined content model

When this is done run:

npm run dev to start a development environment at localhost:8000

or

npm run build to create a production ready static site in ./public

For further information check the readme of the project
(https://github.com/contentful/starter-gatsby-blog)

`);
