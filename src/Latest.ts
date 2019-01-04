import LooseObject from './LooseObject'

export default class {
  constructor(json: LooseObject) {
    // publication
    if (json.hasOwnProperty('collection')) {
      this.parsePublication(json)
    }
    // user
    if (json.hasOwnProperty('user')) {
      this.parseUser(json)
    }
  }

  private parseUser(json: LooseObject) {
    const posts = Object.keys(json.references.Post).map(key => json.references.Post[key])

    this.posts = posts.map((p: LooseObject) => new Post(p.uniqueSlug, p.title))
  }

  private parsePublication(json: LooseObject) {
    this.posts = json.posts.map((p: LooseObject) => new Post(p.uniqueSlug, p.title))
  }

  public posts: Post[] = []
}

class Post {
  /**
   *
   */
  constructor(public uniqueSlug: string, public title: string) {}
}
