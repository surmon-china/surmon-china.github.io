
module.exports = source => {
  const project = process.argv[8]
  if (process.env.NODE_ENV === 'production' && source.includes('src="/static/')) {
    source = source.replace(/src="\/static\//g, `src="/${project}/static/`)
  }
  return source
}