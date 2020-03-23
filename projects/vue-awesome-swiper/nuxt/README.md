### SSR

In the SSR environment, you can control any component to be loaded and rendered only on the client.

And you can use the following methods on Nuxt.js:

```ts
plugins: [
  { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
]
```

```vue
<template>
  <client-only>
    <swiper>
      <swiper-slide>
        Only load and render on browser
      </swiper-slide>
    </swiper>
  </client-only>
</template>
```

However, the `<client-only>` component will cause anything to not be output during server rendering. If your content is more important and requires SEO, this may not meet your expectations.

Therefore, `vue-awesome-swiper` has a built-in `directive` to render Swiper on the client. The biggest benefit of the `directive` is that the server can still output the original HTML when rendering, so that the search engine can correctly capture the target content.

### Directive

```html
<div v-swiper="swiperOption">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      Render HTML on server, render Swiper on browser
    </div>
  </div>
</div>
```

The `directive` will be installed automatically when `vue-awesome-swiper` was used globally, or you can install it manually locally:

```ts
import { directive } from 'vue-awesome-swiper'

export default {
  directives: {
    swiper: directive
  }
}
```

**Note:** If you need to use `vue-awesome-swiper` in the ssr environment, whether it's `component` or `directive`, `vue-awesome-swiper` must be loaded only in the browser environment.