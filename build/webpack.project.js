
let project
const prod = process.env.NODE_ENV === 'production'

if (prod) {
  project = process.argv[2]
} else {
  project = process.argv[6]
}

console.log(
  'current env：', process.env.NODE_ENV,
  '\n',
  'current project：', project,
  '\n'
)

module.exports = project
