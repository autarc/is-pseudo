/**
 * # Lookup
 *
 *
 */

import classes from './classes'
import elements from './elements'
import vendors from './vendors'
import customs from './customs'

const defaultSelectors = [
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
export default function isPseudo (input, includeCustoms) {

  if (typeof input !== 'string') {
    throw Error('Invalid input type - the selector has to be a string!')
  }

  input = input.substr(input.lastIndexOf(':') + 1).replace(/(\(.*\))/g, '')

  const selectors = [...defaultSelectors]

  if (includeCustoms) {
    selectors.push.apply(selectors, customs)
  }

  return selectors.some((selector) => input === selector)
}
