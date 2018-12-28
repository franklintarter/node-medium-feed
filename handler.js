'use strict';

const feed = require('./dist/node-medium-feed.umd')

module.exports.latest = async (event, context) => {
  const publication = event.queryStringParameters.publicationName
  const latest = await feed.getLatest(publication)
  return {
    statusCode: 200,
    body: latest
  };
};

module.exports.story = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
}
