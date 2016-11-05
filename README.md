[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# is Pseudo (?)

Provide a simple lookup to check if a provided selector targets a pseudo class or element.


## About

Although there are already some projects which refer towards a list of pseudo [classes](https://github.com/johnotander/pseudo-classes) or [elements](https://github.com/johnotander/pseudo-elements) - they are not convenient to use for a simple lookup. On the contrary this library provides a simple validation function which also include browser vendor specific selectors and common extensions defined by [jQuery](https://github.com/fb55/css-select) & [CSS Select](https://github.com/fb55/css-select).


## Usage

### Install

`npm install --save is-pseudo`


### General

```js
import isPseudo from 'is-pseudo'

if (isPseudo('div a.super:hover')) {
  // true
}

if (isPseudo('div span:has(a)', { customs: true })) {
  // true
}
```


## TODO

- add strict comparison option for selectors with brackets (e.g. `:nth-child(3)`)


## Links

- [https://www.smashingmagazine.com/2016/05/an-ultimate-guide-to-css-pseudo-classes-and-pseudo-elements/](https://www.smashingmagazine.com/2016/05/an-ultimate-guide-to-css-pseudo-classes-and-pseudo-elements/)


## Development

To build your own version run `npm run dev` for development (incl. watch) or `npm run build` for production (minified).
