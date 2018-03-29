# Restoration Master

**Authors:**
* Joel Clair
* Kowser Kassa
* Mitchell Massie

**Version:** 1.0.0

# Overview


# Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. If wanting to view tests, enter `npm install -D` into the command line. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions. You can open up the code in your favorite editor to explore/modify the code, see how the tests are structured, and create tests of your own if desired.

## Components
```
App
  <routes>
    <dashboard>
      <landing>
      <component>
      <component>
```

### App
This component is the highest level component of the application. It renders a `<main>` body section containing a few components: `<Provider>`, `<BrowserRouter>`, and `<Route>`.

### Provider
This component is imported from `react-redux` and is passed a `Redux` `{store}` as props.

### BrowserRouter
This component is imported from `react-router-dom` and is utilized to set up the routes for the application.

### Route
This component determines the components that will render for the various specified paths. For this application, there is a single `<Route>` to the `/` endpoint, and renders the `<Dashboard>`.

### Dashboard

***

# Credits 
**<details>**
  <summary>Tools and Libraries [click to expand]</summary>

  * [Babel Core](https://www.npmjs.com/package/babel-core) ~ npmjs.com/package/babel-core
  * [Babel Loader](https://www.npmjs.com/package/babel-loader) ~ npmjs.com/package/babel-loader 
  * [Babel Plugin Transform Object Rest Spread](https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread) ~  npmjs.com/package/babel-plugin-transform-object-rest-spread
  * [Babel Preset Env](https://www.npmjs.com/package/babel-preset-env) ~ npmjs.com/package/babel-preset-env
  * [Babel Preset React](https://www.npmjs.com/package/babel-preset-react) ~ npmjs.com/package/babel-preset-react
  * [CSS Loader](https://www.npmjs.com/package/css-loader) ~ npmjs.com/package/css-loader 
  * [Enzyme](https://www.npmjs.com/package/enzyme) ~ npmjs.com/package/enzyme
  * [Enzyme Adapter React 16](https://www.npmjs.com/package/enzyme-adapter-react-16) ~ npmjs.com/package/enzyme-adapter-react-16
  * [ESLint](https://www.npmjs.com/package/eslint) ~ npmjs.com/package/eslint
  * [Extract Text Webpack Plugin](https://www.npmjs.com/package/extract-text-webpack-plugin) ~ npmjs.com/package/extract-text-webpack-plugin
  * [HTML Webpack Plugin](https://www.npmjs.com/package/html-webpack-plugin) ~ npmjs.com/package/html-webpack-plugin
  * [Jest](https://facebook.github.io/jest/) ~ facebook.github.io/jest/
  * [Node SASS](https://www.npmjs.com/package/node-sass) ~ npmjs.com/package/node-sass
  * [React](https://www.npmjs.com/package/react) ~ npmjs.com/package/react
  * [React DOM](https://www.npmjs.com/package/react-dom) ~ npmjs.com/package/react-dom
  * [SASS Loader](https://www.npmjs.com/package/sass-loader) ~ npmjs.com/package/sass-loader
  * [Webpack](https://www.npmjs.com/package/webpack) ~ npmjs.com/package/webpack
  * [Webpack Dev Server](https://www.npmjs.com/package/webpack-dev-server) ~ npmjs.com/package/webpack-dev-server
</details>

