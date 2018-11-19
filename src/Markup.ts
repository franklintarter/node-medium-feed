import LooseObject from './LooseObject'

export default class Markup {
  constructor(
    json: LooseObject
  ) {
    this.type = json.type
    this.start = json.start
    this.end = json.end
    this.href = json.href
  }
  public type: MarkupType
  public start: number
  public end: number
  public href: string

  get open() : string {
    switch(this.type) {
      case MarkupType.Bold:
        return `**`
      case MarkupType.Italic:
        return `*`
      case MarkupType.Anchor:
        return `[`
      default:
        throw new Error(`Unknown markup type "${this.type}".`)
    }
  }

  get close() : string {
    switch(this.type) {
      case MarkupType.Bold:
        return '**'
      case MarkupType.Italic:
        return '*'
      case MarkupType.Anchor:
        return `](${this.href})`
    }
  }
}

export enum MarkupType {
  Bold = 1,
  Italic = 2,
  Anchor = 3
}