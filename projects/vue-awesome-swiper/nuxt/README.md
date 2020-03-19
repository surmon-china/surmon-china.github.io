### SSR

In the SSR environment, you can control any component to be loaded and rendered only on the client. Under Nuxt.js, you can use the following methods:

```ts
plugins: [
  { src: '@/plugins/vue-awesome-swiper', ssr: false },
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

However, the `<client-only>` component will cause any of them to not be output during server rendering. If your content is more important and requires SEO, this may not meet your expectations.

Therefore, vue-awesome-swiper has a built-in directive to render Swiper on the client. The biggest benefit of the directive is that the server can still output the original HTML when rendering, so that the search engine can correctly capture the target content.

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

When vue-awesome-swiper is used globally, the `directive` will be installed automatically, or you can install it manually locally:

```ts
import { directive } from 'vue-awesome-swiper'

export default {
  directives: {
    swiper: directive
  }
}
```

Note: if you need to use vue-awesome-swiper in the ssr environment, whether it is a `component` or a `directive`, vue-awesome-swiper must be loaded only in the browser environment.