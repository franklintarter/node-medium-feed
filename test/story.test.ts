import Story from '../src/Story'
import json from './data/story'

describe('Story', () => {

  it('Has correct paragraphs count', () => {
    const story = new Story(json)
    expect(story.content.paragraphs.length).toBe(23)
  })

})