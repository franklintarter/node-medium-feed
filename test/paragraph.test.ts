import Paragraph, { ParagraphType }  from '../src/Paragraph'
import { basic, paragraphWithMultipleMarkups, markupParagraphs, createTestP } from './data/paragraph'

describe('Paragraph', () => {

  it('Is constructed correctly', () => {
    const p = new Paragraph(basic)
    expect(p.name).toBe('3387')
    expect(p.markups.length).toBe(0)
  })

  it('Has correct paragraph type', () => {
    const p = new Paragraph(basic)
    expect(p.type).toBe(ParagraphType.Standard)
  })

  it('Throws exception, with unknown type.', () => {
    expect(() => new Paragraph(createTestP(20, "", ""))).toThrow()
  })

})

describe('Paragraph With Markups', () => {

  it('Has correct amount of markups', () => {
    const p = new Paragraph(paragraphWithMultipleMarkups)
    expect(p.markups.length).toBe(5)
  })

  it('Is formatted properly', () => {
    const p = new Paragraph(paragraphWithMultipleMarkups)
    const processed = p.processParagraph()
  
    expect(processed).toBe(paragraphWithMultipleMarkups.expectedResult)
  })

})

describe('Paragraph markup', () => {

  markupParagraphs.map(p => testMarkupParagraph(p))

})

function testMarkupParagraph (paragraph: any) {
  it(paragraph.testMessage, () => {
    const p = new Paragraph(paragraph)
    expect(p.processParagraph()).toBe(paragraph.expectedResult)
  })
}
