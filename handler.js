'use strict';

const feed = require('./dist/node-medium-feed.umd')

module.exports.latest = async (event, context) => {
  const publication = event.queryStringParameters.publicationName
  const latest = await feed.getLatest(publication)
  return {
    statusCode: 200,
    isBase64Encoded: false,
    body: JSON.stringify(latest)
  };
};

module.exports.story = async (event, context) => {
  const publication = event.queryStringParameters.publicationName
  const storyId = event.queryStringParameters.storyId
  const story = await feed.getStory(publication, storyId)
  return {
    statusCode: 200,
    isBase64Encoded: false,
    body: JSON.stringify(story)
  };
}
