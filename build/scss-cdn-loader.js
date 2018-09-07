
const project = require('./webpack.project')

module.exports = function (source) {
  if (process.env.NODE_ENV === 'production' && source.includes('url(/static/')) {
    source = source.replace(/url\(\/static\//g, `url(/${project}/static/`)
  }
  return source
}