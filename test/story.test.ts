import Story from '../src/Story'
import storyData from './data/story'

describe('Story', () => {
  it('Has correct paragraphs count', () => {
    const story = new Story(storyData)
    expect(story.content.paragraphs.length).toBe(23)
  })

  it('Parses markdown', () => {
    const story = new Story(storyData)
    expect(story.content.toMarkdown()).toBe(storyData.expectedMarkdown)
  })
})
