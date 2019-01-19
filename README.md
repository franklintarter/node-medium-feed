# Node Medium Feed

[![Travis](https://img.shields.io/travis/franklintarter/node-medium-feed.svg)](https://travis-ci.org/franklintarter/node-medium-feed)

## Quickstart

```js
import { getLatest, getStory } from 'node-medium-feed'

const story = await getStory('[user-or-publication]', 'story-unique-slug')
const markdown = story.content.toMarkdown()

const latest = await getLatest('[user-or-publication]')

// ..

```

## Dev

```bash
yarn
yarn test:watch
```

## Deploy

Copy, edit & rename serverless-example.yml as serverless.yml

```bash
yarn deploy-serverless
```


## Example App

[CLI](https://github.com/franklintarter/node-medium-feed-cli)

## References

Project boilerplate provided by [TypeScript Library Starter](https://github.com/alexjoverm/typescript-library-starter)
