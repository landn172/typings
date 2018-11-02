const request = require('request-promise-native');
const cheerio = require('cheerio');

export default request

export function loadPageAsync(url) {
  return request(url).then(body => body)
}

export function loadPageWithCheerioAsync(url) {
  return loadPageAsync(url).then(body => cheerio.load(body))
}
