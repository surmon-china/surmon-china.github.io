
let project
const prod = process.env.NODE_ENV === 'production'

if (prod) {
  project = process.argv[2]
} else {
  project = process.argv[6]
}

console.log('current env：', process.env.NODE_ENV)
console.log('current project：', project)
console.log('\n')

module.exports = project
