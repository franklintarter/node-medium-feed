import LooseObject from './LooseObject'

export default class Paragraph {
  /**
   * @param  {LooseObject} json
   */
  constructor(
    json: LooseObject
    ) {
      this.name = json.name
      this.text = json.text
      this.metadata = json.metadata
      this.iframe = json.iframe
    }
    
  public iframe: LooseObject
  public metadata: LooseObject
  public name: string
  public text: string
}
