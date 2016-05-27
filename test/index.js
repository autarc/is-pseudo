/**
 * # Test
 *
 *
 */

var assert = require('assert')

var isPseudo = require('../lib/index').default

const examples = [
  { selector: 'div:hover',                                    expect: true  },
  { selector: '-ms-clear',                                    expect: true  },
  { selector: ':has',                                         expect: true  },
  { selector: 'nth-last-last-child: :last-child',             expect: true  },
  { selector: 'nth-last-last-child: :nth-last-last-child(1)', expect: false }
]

examples.forEach(function (example) {
  var status = (isPseudo(example.selector, { customs: true }) === example.expect) ? 'Match' : 'Miss'
  console.log('[' + status.toUpperCase() + ']', example.selector)
})
