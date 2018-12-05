import { getStory, getLatest } from '../src/node-medium-feed'

const userId = 'mortar-labs'
const storyId = 'avoid-spending-time-on-the-stuff-you-dont-care-about-34cac4656761'

describe('Integration Tests', () => {
  it('Gets a Medium Story', async () => {
    const story = await getStory(userId, storyId)

    expect(story.title).toBe('Avoid Spending Time on the Stuff You Don’t Care About')
  })

  it('Gets the latest', async () => {
    const latest = await getLatest('mortar-labs')

    expect(latest.posts.length).toBeGreaterThan(1)
  })
})
