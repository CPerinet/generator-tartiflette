# generator-tartiflette [![NPM version][npm-image]][npm-url]

Yeoman Generator for Webapp

![Tarti logo](tarti.png)

## Out of the box
- Webpack
- SCSS
	- Linter
	- [Fontawesome](http://fontawesome.io/)
	- [Gridle](http://gridle.org/)
- ES6 + Linter

## Options
- [React](https://facebook.github.io/react/)
- [React/Router](https://github.com/ReactTraining/react-router)
- Server ([Express](http://expressjs.com/))
- API
- Database ([MongoDB](https://www.mongodb.com/)) + [Mongoose](http://mongoosejs.com/)

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

Run application in production mode
```bash
npm run start
```

Run application in development mode
```bash
npm run dev
```

Build application
```bash
npm run build
```

## License

MIT © [Charles Perinet](www.charles-perinet.fr)

[npm-url]: https://npmjs.org/package/generator-tartiflette
[npm-image]: http://img.shields.io/npm/v/generator-tartiflette.svg
