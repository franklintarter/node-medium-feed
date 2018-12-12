import LooseObject from './LooseObject'
import Paragraph from './Paragraph'

export default class Story {
  /**
   * @param  {LooseObject} json
   */
  constructor(json: LooseObject) {
    this.updatedAt = new Date(json.updatedAt)
    this.createdAt = new Date(json.createdAt)
    this.content = new Content(json.content.subtitle, json.content.bodyModel.paragraphs)
    this.id = json.id
    this.title = json.title
    this.detectedLanguage = json.detectedLanguage
  }

  public id: String
  public title: String
  public detectedLanguage: String
  public updatedAt: Date
  public createdAt: Date
  public content: Content
}

export class Content {
  /**
   * @param  {String} publicsubtitle
   * @param  {LooseObject[]} paragraphs
   */
  constructor(public subtitle: String, paragraphs: LooseObject[]) {
    this.paragraphs = paragraphs.map(p => new Paragraph(p))
  }
  public toMarkdown(): string {
    return this.paragraphs.reduce((p, v) => (p += v.processParagraph()), '')
  }
  public paragraphs: Paragraph[]
}
