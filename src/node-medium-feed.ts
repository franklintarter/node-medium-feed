import axios from 'axios'

import LooseObject from './LooseObject'
import Story from './Story'
import Latest from './Latest'
import { cleanResponse, getPayload } from './Util'

const MEDIUM_URL = 'https://medium.com'
const FORMAT = 'format=json'

export function getStory(mediumUserName: string, storyId: string): Promise<Story> {
  return axios
    .get(`${MEDIUM_URL}/${mediumUserName}/${storyId}?${FORMAT}`)
    .then((response: LooseObject) => {
      const cleanedPost = cleanResponse(response.data)
      const payload = getPayload(cleanedPost)
      return new Story(payload)
    })
}

export function getLatest(mediumUserName: string): Promise<Latest> {
  return axios
    .get(`${MEDIUM_URL}/${mediumUserName}/latest?${FORMAT}`)
    .then((response: LooseObject) => {
      const cleanedPost = cleanResponse(response.data)
      const json = JSON.parse(cleanedPost).payload
      return new Latest(json)
    })
}
