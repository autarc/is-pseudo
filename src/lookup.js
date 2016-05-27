/**
 * # Lookup
 *
 *
 */

import classes from './classes'
import elements from './elements'
import vendors from './vendors'
import customs from './customs'

const defaultConfig = {
  customs: false,
  selectors: [
    ...classes,
    ...elements,
    ...vendors
  ]
}

/**
 * Lookup to check if the provided input is a (valid) pseudo class or element selector.
 *
 * @param  {string}  selector - CSS selector to check
 * @return {boolean}          - indicator if it selects a pseudo class or element
 */
export default function lookup (input, customConfig) {

  if (typeof input !== 'string') {
    throw Error('Invalid input type - the selector has to be a string!')
  }

  const config = {...defaultConfig}

  if (typeof customConfig === 'object') {
    Object.assign(config, customConfig)
  }

  const { selectors } = config

  if (config.customs) {
    selectors.push.apply(selectors, customs)
  }

  input = input.substr(input.lastIndexOf(':') + 1)

  return selectors.some((selector) => input.indexOf(selector) === 0)
}
