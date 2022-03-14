import { AnchorHTMLAttributes, defineComponent, h } from 'vue'
import { GITHUB_PAGES_ROOT_DOMAIN } from '@/config'

export default defineComponent({
  name: 'ulink',
  props: {
    text: String,
    href: {
      type: String,
      required: true
    },
    blank: {
      type: Boolean,
      default: true
    },
    external: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return () => {
      const { text, href, external, blank, ...linkAttrs } = props
      const customAttrs: AnchorHTMLAttributes = {}

      const url = new URL(href)
      if (external || !url.host.endsWith(GITHUB_PAGES_ROOT_DOMAIN)) {
        customAttrs.rel = 'external nofollow noopener'
      }

      if (blank) {
        customAttrs.target = '_blank'
      }

      return h(
        'a',
        {
          href,
          ...linkAttrs,
          ...customAttrs
        },
        context.slots.default?.() || text
      )
    }
  }
})
