import testPost from './data/raw-post'
import cleanedPost from './data/cleaned-post'
import { cleanResponse, getValue } from '../src/Util'

describe('Parser', () => {

  it('Strips off unneeded characters off raw medium feed.', () => {
    const result = cleanResponse(testPost)
    expect(result[0]).toBe('{')
    expect(result.substr(result.length - 1)).toBe('}')
  })

  it('Gets the payload from the json response.', () => {
    const result = getValue(cleanedPost)
    expect(result.id).toBe('34cac4656761')
  })

});
