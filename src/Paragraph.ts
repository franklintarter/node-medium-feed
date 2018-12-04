import LooseObject from './LooseObject'
import Markup, { MarkupType } from './Markup'

const MEDIUM_IMG_CDN = 'https://cdn-images-1.medium.com'
const MEDIUM_MEDIA = 'https://medium.com/media'

export default class Paragraph {
  /**
   * @param  {string} publicname
   * @param  {number} publictype
   * @param  {string} publictext
   * @param  {Markup[]} publicmarkups
   */
  constructor(json: LooseObject) {
    this.type = setParagraphType(json.type)
    this.name = json.name
    this.markups = json.markups ? json.markups.map((m: LooseObject) => new Markup(m)) : [] // eslint-disable-line
    this.text = json.text
    this.metadata = json.metadata
    this.iframe = json.iframe
  }

  public iframe: LooseObject
  public metadata: LooseObject
  public name: string
  public text: string
  public markups: Markup[]
  public type: ParagraphType
  get hasAnyMarkups(): boolean {
    return this.markups.length > 0
  }

  public processParagraph(): string {
    const markups = createMarkupArray(this.markups)
    let parsedText = this.text

    if (markups.length > 0) {
      let previousIndex = 0
      let text = this.text
      let tokens = []
      for (let j = 0; j < markups.length; j++) {
        if (markups[j]) {
          const token = text.substring(previousIndex, j)
          previousIndex = j
          tokens.push(token)
          tokens.push(markups[j])
        }
      }
      tokens.push(text.substring(markups.length - 1))
      parsedText = tokens.join('')
    }

    return this.addParagraphMarkup(parsedText)
  }

  public addParagraphMarkup(parsedText: string): string {
    let text
    switch (this.type) {
      case ParagraphType.Standard:
        text = `\n ${parsedText}`
        break
      case ParagraphType.H1:
        text = `\n# ${parsedText.replace(/\n/g, '\n# ')}`
        break
      case ParagraphType.ImageAndCaption:
        let imgsrc = MEDIUM_IMG_CDN
        if (this.metadata.originalHeight) {
          imgsrc = `${imgsrc}/fit/${this.metadata.originalWidth}/${this.metadata.originalHeight}/${
            this.metadata.id
          }`
        } else {
          imgsrc = `${imgsrc}/max/${this.metadata.originalWidth}/${this.metadata.id}`
        }
        text = `\n![${parsedText}](${imgsrc})`
        if (parsedText) {
          text += `*${parsedText}*`
        }
        break
      case ParagraphType.BlockQuote:
        text = `\n> ${parsedText}`
        break
      case ParagraphType.Code:
        text = `\`\`\`\n ${parsedText}\`\`\``
        break
      case ParagraphType.UnOrderedList:
        text = `\n* ${parsedText}`
        break
      case ParagraphType.OrderedList:
        text = `\n1. ${parsedText}`
        break
      case ParagraphType.IFrame:
        // TODO: use youtube videos if they have it
        const iframeSrc = `${MEDIUM_MEDIA}/${this.iframe.mediaResourceId}`
        // text = `[![${parsedText}](${MEDIUM_MEDIA}/${this.iframe.mediaResourceId}/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)`
        text = `<iframe src="${iframeSrc}" frameborder=0></iframe>`
        break
      case ParagraphType.SubTitle:
        text = `\n### ${parsedText}`
        break
    }
    return `\n${text}`
  }
}

function createMarkupArray(markups: Markup[]): string[] {
  let array: string[] = []
  markups.map(m => {
    if (array[m.start]) {
      array[m.start] += m.open
    } else {
      array[m.start] = m.open
    }

    if (array[m.end]) {
      if (m.type === MarkupType.Anchor) {
        array[m.end] += array[m.end]
      } else {
        array[m.end] = m.close + array[m.end]
      }
    } else {
      array[m.end] = m.close
    }
  })

  return array
}

function setParagraphType(type: Number): ParagraphType {
  switch (type) {
    case 1:
      return ParagraphType.Standard
    case 2:
    case 3:
      return ParagraphType.H1
    case 4:
      return ParagraphType.ImageAndCaption
    case 6:
      return ParagraphType.BlockQuote
    case 8:
      return ParagraphType.Code
    case 9:
      return ParagraphType.UnOrderedList
    case 10:
      return ParagraphType.OrderedList
    case 11:
      return ParagraphType.IFrame
    case 13:
      return ParagraphType.SubTitle
    default:
      throw new Error(`Unknown paragraph type "${type}" encountered.`)
  }
}

export enum ParagraphType {
  Standard = 1,
  H1 = 2,
  ImageAndCaption = 3,
  BlockQuote = 4,
  Code = 5,
  UnOrderedList = 6,
  IFrame = 7,
  SubTitle = 8,
  OrderedList = 9
}
