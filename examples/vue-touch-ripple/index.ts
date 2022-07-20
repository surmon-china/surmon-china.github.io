const components = import.meta.glob<{ default: any }>('./*.vue', { eager: true })
const raws = import.meta.glob<string>('./*.vue', { as: 'raw', eager: true })

export default Object.keys(components).map((id) => ({
  component: components[id].default,
  raw: raws[id],
  language: 'vue'
}))
