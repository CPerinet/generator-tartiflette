# generator-tartiflette [![NPM version][npm-image]][npm-url]

Yeoman Generator for Webapp

## Out of the box
- Webpack
- SCSS
- ES6

## Options
- React
- Express server + MongoDB

## Installation

First, install [Yeoman](http://yeoman.io) and generator-tartiflette using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-tartiflette
```

Then generate your new project:

```bash
yo tartiflette
```

## Use

### Start

Without server

```bash
npm start
```
With server

```bash
mongod --dbpath <PATH_TO_DB>
npm run serve
npm run watch
```

### Build

```bash
npm build
```

## License

MIT © [Charles Perinet](www.charles-perinet.fr)


[npm-url]: https://npmjs.org/package/generator-tartiflette
[npm-image]: http://img.shields.io/npm/v/generator-tartiflette.svg
