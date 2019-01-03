import Author from '../src/Author'
import { MEDIUM_IMG_CDN } from '../src/Constants'

const authorJson = {
  name: 'John Smith',
  imageId: 'foo',
  bio: 'https://google.com',
  userId: '3113c75d84a7'
}

describe('Author', () => {
  it('Has basic properties correctly mapped', () => {
    const author = new Author(authorJson)
    expect(author.name).toBe(authorJson.name)
    expect(author.bioUrl).toBe(authorJson.bio)
    expect(author.id).toBe(authorJson.userId)
  })

  it('Constructs avatar URL correctly', () => {
    const author = new Author(authorJson)
    expect(author.avatarUrl).toBe(`${MEDIUM_IMG_CDN}/${authorJson.imageId}`)
  })
})
