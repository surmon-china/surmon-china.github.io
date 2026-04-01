const langCodes = import.meta.glob<string>('./lang-code/*/index.ts')
const languages: { [key in string]: () => any } = {}
Object.keys(langCodes).forEach((fileName) => {
  const language = fileName.replace('./lang-code/', '').replace('/index.ts', '')
  languages[language] = langCodes[fileName]
})

export default languages
