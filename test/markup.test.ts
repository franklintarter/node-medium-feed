import Markup, { MarkupType } from '../src/Markup'
import markup from './data/markup'

const createMarkup = (type : number) => {
  return {  
    "type":type,
    "start":75,
    "end":87,
    "href":"https://stripe.com/atlas",
    "title":"",
    "rel":"",
    "anchorType":0
  }
}

describe('Markup', () => {

  it('Has the correct type', () => {
    const m = new Markup(markup)
    expect(m.type).toBe(MarkupType.Anchor)
  })

  it('Throws when type is unkown', () => {
    const m = new Markup(createMarkup(4))
    expect(() => m.open).toThrow()
    expect(() => m.close).toThrow()
  })

})

const tagTests = [
  { type: 1, name: 'Bold', expectedOpen: '**', expectedClose: '**' },
  { type: 2, name: 'Italic', expectedOpen: '*', expectedClose: '*' },
  { type: 3, name: 'Anchor', expectedOpen: '[', expectedClose: '](https://stripe.com/atlas)' }
]

describe('Markup tags', () => {
  tagTests.map(t => testTags(t.type, t.name, t.expectedOpen, t.expectedClose))
})

function testTags(type: number, name: string, expectedOpen: string, expectedClose: string) {
  it(`${name} creates tags correctly.`, () => {
    const m = new Markup(createMarkup(type))
    expect(m.open).toBe(expectedOpen)
    expect(m.close).toBe(expectedClose)
  })
}
