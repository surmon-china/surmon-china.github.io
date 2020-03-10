/**
 * @file Example page meta transformer
 * @author Surmon <https://github.com/surmon-china>
 */

import CONFIG from '@/config'

export interface IComponentExampleMeta {
  name: string
  title: string
  fileName: string
  component: $TODO
}

export function getComponentExampleMeta(components: $TODO): IComponentExampleMeta[] {
  return Object.values(components).map(component => {
    const { name, title, __file } = component as $TODO
    // https://vue-loader.vuejs.org/zh/options.html#exposefilename
    // 生产环境下只有文件名，测试环境下包含全量路径，使用 exposefilename 控制后，确定无论如何能拿到文件名
    const paths = __file?.split('/') || []
    const fileName = paths[paths.length - 1]
    return {
      name,
      title: title || name,
      fileName,
      component
    }
  })
}

export function getHomePageHeadMeta(repoName: string, description?: string) {
  const keywords = [
    `${CONFIG.GITHUB_UID} ${repoName}`,
    `${repoName} github homepage`,
    `${repoName} examples`,
    `How to use ${repoName}?`,
  ];

  const titleSuffix = description ? ` | ${description} ` : ''
  const title = `${repoName} | Homepage${titleSuffix}`

  return {
    title,
    meta: [
      { hid: 'keywords', name: 'keywords', content: keywords.join(',') },
      { hid: 'description', name: 'description', content: description || title }
    ]
  }
}
