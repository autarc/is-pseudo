/**
 * # Test
 *
 *
 */

var isPseudo = require('../lib/index').default

const examples = [
  'div:hover',
  '-ms-clear',
  'false',
  ':has',
  'nth-last-last-child: :last-child',
  'nth-last-last-child: :nth-last-last-child(1)'
]

examples.forEach(function (example) {
  console.log(example, isPseudo(example, true))
})
