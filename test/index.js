/**
 * # Test
 *
 *
 */

var isPseudo = require('../lib/index').default

const examples = [
  'div:hover',
  '-ms-clear',
  'false'
]

examples.forEach(function (example) {
  console.log(example, isPseudo(example))
})
