import { App, defineComponent, h } from 'vue'

export interface ScriptLoaderOption extends Partial<HTMLScriptElement> {
  domain?: string
}

export const loadScript = (
  source: string,
  options: ScriptLoaderOption = {} as ScriptLoaderOption
) => {
  return new Promise((resolve, reject) => {
    const head = document.head || document.getElementsByTagName('head')[0]
    const script = document.createElement('script')
    const {
      src,
      domain,
      type = 'text/javascript',
      charset = 'utf-8',
      defer = false,
      async = false,
      ...restAttrs
    } = options
    script.type = type
    script.defer = defer
    script.async = async
    script.src = src || source

    Object.keys(restAttrs).forEach((key) => {
      ;(script as any)[key] = (restAttrs as any)[key]
    })

    if (domain) {
      const link = document.createElement('link')
      link.href = domain
      link.rel = 'preconnect'
      head.appendChild(link)
    }

    head.appendChild(script)
    script.onload = resolve
    script.onerror = reject
  })
}

export interface AdSenseConfig {
  ID: string
  enabledAutoAD?: boolean
}

const ADS_SCRIPT = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'

const getComponent = (clientID: string) =>
  defineComponent({
    name: 'Adsense',
    props: {
      class: String,
      insClass: {
        type: String,
        default: ''
      },
      insStyle: {
        type: String,
        default: 'display:block;'
      },
      dataAdClient: String,
      dataAdSlot: String,
      dataAdLayoutKey: String,
      dataAdTest: String,
      dataAdFormat: String,
      dataFullWidthResponsive: [Boolean, String]
    },
    setup(props) {
      return () => {
        const {
          class: rootClass,
          insClass,
          insStyle,
          dataAdClient,
          dataAdSlot,
          dataAdLayoutKey,
          dataAdTest,
          dataAdFormat,
          dataFullWidthResponsive,
          ...restAttrs
        } = props

        return h(
          'div',
          {
            class: ['mammon-box', rootClass],
            placeholder: 'AD'
          },
          [
            h('script', {
              type: 'text/javascript',
              async: 'true',
              src: ADS_SCRIPT
            }),
            h('ins', {
              class: ['adsbygoogle', insClass],
              style: insStyle,
              'data-ad-client': dataAdClient || clientID,
              'data-ad-slot': dataAdSlot,
              'data-ad-layout-key': dataAdLayoutKey,
              'data-ad-test': dataAdTest,
              'data-ad-format': dataAdFormat,
              'data-full-width-responsive': dataFullWidthResponsive,
              ...restAttrs
            }),
            h('script', `(adsbygoogle = window.adsbygoogle || []).push({})`)
          ]
        )
      }
    }
  })

export default {
  install(app: App, adsenseConfig: AdSenseConfig) {
    const component = getComponent(adsenseConfig.ID)
    app.component(component.name, component)

    if (adsenseConfig.enabledAutoAD) {
      loadScript(ADS_SCRIPT, { async: true }).then(() => {
        const adsbygoogle = (window as any).adsbygoogle || []
        adsbygoogle.push({
          google_ad_client: adsenseConfig.ID,
          enable_page_level_ads: true
        })
      })
    }
  }
}
