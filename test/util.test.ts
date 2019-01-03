import testPost from './data/raw-post'
import cleanedPost from './data/cleaned-post'
import { cleanResponse, getPayload } from '../src/Util'

describe('Parser', () => {
  it('Strips off unneeded characters off raw medium feed.', () => {
    const result = cleanResponse(testPost)
    expect(result[0]).toBe('{')
    expect(result.substr(result.length - 1)).toBe('}')
  })

  it('Gets the payload from the json response.', () => {
    const result = getPayload(cleanedPost)
    expect(result.value.id).toBe('34cac4656761')
  })
})
