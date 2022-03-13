### SSR

In the SSR environment, you can control any component to be loaded and rendered only in the browser (client).

You can use the following form in Nuxt.js:

```ts
plugins: [
  { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
]
```

```html
<template>
  <client-only>
    <swiper>
      <swiper-slide>
        Only loaded and rendered in browser (client)
      </swiper-slide>
    </swiper>
  </client-only>
</template>
```

However, the `<client-only>` component will cause nothing to be output during server rendering. If your content is important and requires SEO, this may not meet your expectations.

Therefore, `vue-awesome-swiper` has a built-in `directive` for rendering Swiper in the client. The biggest benefit of `directive` is that the original HTML can still be output during server rendering, so that search engines can properly capture the target content.

### Directive

```html
<div v-swiper="swiperOption">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      Render original HTML in server, render Swiper in browser (client)
    </div>
  </div>
</div>
```

When installing `vue-awesome-swiper` globally, the `directive` will be installed automatically.

You can also manually install the `directive` for local component use.


```ts
import { directive } from 'vue-awesome-swiper'

export default {
  directives: {
    swiper: directive
  }
}
```

**Note:**

If you need to use `vue-awesome-swiper` in SSR, `vue-awesome-swiper` must be loaded only in `browser` environment.
