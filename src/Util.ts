import LooseObject from './LooseObject'

/**
 * @param  {string} rawPost
 * @returns string
 */
export function cleanResponse(rawPost: string) : string {
  const result = rawPost.substr(rawPost.indexOf('{'))
  return result
}

/**
 * @param  {string} cleanedPost
 * @returns Object, in json formatt
 */
export function getValue(cleanedPost: string) : LooseObject {
  const result = JSON.parse(cleanedPost).payload.value
  return result
}