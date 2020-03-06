
export interface IComponentExampleMeta {
  name: string
  title: string
  path: string
  component: $TODO
}

export function getComponentExampleMeta(components: $TODO): IComponentExampleMeta[] {
  return Object.values(components).map(component => {
    const { name, title, __file } = component as $TODO
    return {
      name,
      title: title || name,
      path: __file, // XXX: __file may be removed
      component
    }
  })
}

export function getHomePageHeadMeta(repoName: string, description: string) {
  const keywords = [
    `${repoName} github homepage`,
    `${repoName} examples`,
    `How to use ${repoName}?`,
  ];
  return {
    title: `${repoName} | ${description}`,
    meta: [
      { hid: 'keywords', name: 'keywords', content: keywords.join(',') },
      { hid: 'description', name: 'description', content: description }
    ]
  }
}
