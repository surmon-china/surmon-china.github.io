import dedent from 'dedent'
import NaiveBayes from 'naivebayes'

export const initCode = dedent`
  import NaiveBayes from 'naivebayes'
  import { Segment, useDefault } from 'segmentit'

  // 全量中文分词库
  const segmentit = useDefault(new Segment())
  const classifier = new NaiveBayes({
    // 自定义分词器
    tokenizer(sentence) {
      // 仅保留英文、中文、数字
      const sanitized = sentence.replace(/[^(a-zA-Z\u4e00-\u9fa50-9_)+\s]/g, ' ')
      // 中英文分词
      return segmentit.doSegment(sanitized, { simple: true })
    }
  })
`

export const factory = async () => {
  // @ts-ignore
  const result = window.segmentit ?? (await import('segmentit'))
  // @ts-ignore
  window.segmentit = result
  const { Segment, useDefault } = result
  const segmentit = useDefault(new Segment())
  return new NaiveBayes({
    tokenizer(sentence: string) {
      return segmentit.doSegment(
        sentence.replace(/[^(a-zA-Z\u4e00-\u9fa50-9_)+\s]/g, ' '),
        { simple: true }
      )
    }
  })
}
