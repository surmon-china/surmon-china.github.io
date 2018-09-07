
const project = require('./webpack.project')

module.exports = source => {
  if (process.env.NODE_ENV === 'production' && source.includes('src="/static/')) {
    source = source.replace(/src="\/static\//g, `src="/${project}/static/`)
  }
  return source
}