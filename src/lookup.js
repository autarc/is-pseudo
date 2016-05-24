/**
 * # Lookup
 *
 *
 */

import classes from './classes'
import elements from './elements'
import vendors from './vendors'

const selectors = [
  ...classes,
  ...elements,
  ...vendors
]

/**
 * Lookup to check if the provided input is a valid pseudo element selector.
 *
 * @param  {string}  selector -
 * @return {boolean}          -
 */
export default function isPseudo (input) {
  if (typeof input !== 'string') {
    throw Error('Invalid input type - the selector has to be a string!')
  }
  return selectors.some((selector) => endsWith(input, selector))
}

/**
 * Simplified ES2015 'String.prototype.endsWith' replacement.
 *
 * @param  {[type]} searchString [description]
 * @return {[type]}              [description]
 */
function endsWith (base, suffix) {
  return base.indexOf(suffix, base.length - suffix.length) !== -1
}
