import LooseObject from './LooseObject'

export default class {
  constructor(json: LooseObject) {
    this.posts = json.posts.map((p: LooseObject) => new Post(p.uniqueSlug, p.title))
  }

  public posts: Post[]
}

class Post {
  /**
   *
   */
  constructor(public uniqueSlug: string, public title: string) {}
}
