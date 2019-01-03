import LooseObject from './LooseObject'
import { MEDIUM_IMG_CDN } from './Constants'

export default class Author {
  constructor(json: LooseObject) {
    this.id = json.userId
    this.name = json.name
    this.avatarUrl = `${MEDIUM_IMG_CDN}/${json.imageId}`
    this.bioUrl = json.bio
  }

  public id: String
  public name: String
  public avatarUrl: String
  public bioUrl: String
}
