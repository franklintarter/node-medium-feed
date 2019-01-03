import LooseObject from './LooseObject'

/**
 * @param  {string} rawPost
 * @returns string
 */
export function cleanResponse(rawPost: string): string {
  const result = rawPost.substr(rawPost.indexOf('{'))
  return result
}

/**
 * @param  {string} cleanedPost
 * @returns Object, in json format
 */
export function getPayload(cleanedPost: string): LooseObject {
  const result = JSON.parse(cleanedPost).payload
  return result
}
