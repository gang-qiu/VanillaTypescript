## Barebone boilerplate for vanilla typescript/webpack projects

Boilerplate code that will allow you to build a basic vanilla application with 
modular code organization via webpack (css, js/ts, html).

### Features

##### typescript compilation
write your code in typescript or javascript. `ts-loader` will handle compilation. 
see `src/typescript`

##### css loading
break up your css into smaller files that `@import` each other via `css-loader`.
see `src/styles`. 

Note that `"mini-css-extract-plugin"` compiles the css into a `main.css` file.
This file is accessible from inside shadowDOM components via `<style>@import 'main.css'</style>`

Additionally custom fonts and images can be loaded into the css.

### Setup
```bash
npm install
npm start # starts webpack dev server
          # navigate to http://localhost:8081/
```

### Todo
- test configuration
- separate dev/production load
- linting / prettier
- scss
- form elements and validation
- build demo todo app
