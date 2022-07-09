const importers = import.meta.glob<string>('./lang-code/*/index.ts')

const languages = Object.keys(importers).reduce<{ [key in string]: () => any }>(
  (result, fileName) => {
    const language = fileName.replace('./lang-code/', '').replace('/index.ts', '')
    return { ...result, [language]: importers[fileName] }
  },
  {}
)

export default languages
