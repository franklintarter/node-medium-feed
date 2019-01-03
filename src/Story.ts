import LooseObject from './LooseObject'
import Paragraph from './Paragraph'
import Author from './Author'

export default class Story {
  /**
   * @param  {LooseObject} json
   */
  constructor(json: LooseObject) {
    const story = json.value
    // console.log(story)
    this.updatedAt = new Date(story.updatedAt)
    this.createdAt = new Date(story.createdAt)
    this.content = new Content(story.content.subtitle, story.content.bodyModel.paragraphs)
    this.id = story.id
    this.title = story.title
    this.detectedLanguage = story.detectedLanguage

    const authorJson = json.references.User[Object.keys(json.references.User)[0]]
    this.author = new Author(authorJson)
  }

  public id: String
  public title: String
  public detectedLanguage: String
  public updatedAt: Date
  public createdAt: Date
  public content: Content
  public author: Author
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
