const raws = import.meta.globEager<string>('./codes/*', { assert: { type: 'raw' } })
export default Object.keys(raws).reduce(
  (result, filePath) => {
    const paths = filePath.split('/')
    const language = paths[paths.length - 1].split('.')[0]
    return {
      ...result,
      [language]: raws[filePath]
    }
  },
  {} as {
    [key: string]: string
  }
)
