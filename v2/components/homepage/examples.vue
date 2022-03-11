<template>
  <div class="homepage-examples">
    <transition name="module" mode="out-in">
      <Loading class="loading" v-if="!inited" />
      <client-only v-else>
        <div>
          <div
            class="example-item"
            :key="example.name"
            v-for="(example, index) in examples"
          >
            <homepage-example-card
              :path="example.path"
              :title="example.title || example.name"
              :content-class="contentClass"
            >
              <component
                class="example-component"
                :class="exampleClass"
                :is="example.name"
              />
            </homepage-example-card>
            <homepage-basic-card
              class="example-mammon"
              v-if="!disabledAutoAd && !!adProviders[index]"
            >
              <client-only>
                <mammon :provider="adProviders[index]" />
              </client-only>
            </homepage-basic-card>
          </div>
        </div>
      </client-only>
    </transition>
  </div>
</template>

<script lang="ts">
  import { createComponent, computed, reactive, onBeforeMount } from '@vue/composition-api'
  import Mammon, { MammonProvider, cnMammonProviders, gaMammonProviders } from '@/components/mammon/index.vue'
  import { RootState } from '@/store'
  import HomepageExampleCard from './card-example.vue'
  import HomepageBasicCard from './card-basic.vue'
  import Loading from './loading.vue'

  export interface IExample {
    name: string
    title: string
    path: string
  }
  export default createComponent({
    name: 'homepage-examples',
    props: {
      examples: {
        type: Array as () => Array<IExample>,
        required: true
      },
      disabledAutoAd: {
        type: Boolean,
        default: false
      },
      exampleClass: {
        type: String,
        required: false,
        default: ''
      },
      contentClass: {
        type: String,
        required: false
      }
    },
    components: {
      Mammon,
      Loading,
      HomepageBasicCard,
      HomepageExampleCard
    },
    setup(props, { root }) {
      const BOUNDARY = 6
      const adProviders = reactive<Array<MammonProvider | null>>(props.examples.map(() => null))
      const rootState = root.$store.state as RootState
      const inited = computed(() => rootState.inited)

      onBeforeMount(() => {
        const count = props.examples.length
        const isMobileDevice = computed(() => rootState.isMobileDevice)
        const isChinaGuest = computed(() => rootState.isChinaGuest)
        // 如果为非中文用户 || 移动用户 -> 一定展示 GA
        const isMustBeGA = computed(() => !isChinaGuest.value || isMobileDevice.value)

        // 如果总数小于临界值，则仅在中间显示一个，中文用户展示概率为 50%/50%
        if (count <= BOUNDARY) {
          const targetIndex = Math.ceil(count / 2)
          // 非中文用户 || 移动用户 -> GA -> GA(60%)
          adProviders[targetIndex - 1] = isMustBeGA.value
            ? gaMammonProviders[0]
            : ((Math.ceil(Math.random() * 10) > 6)
                ? cnMammonProviders[0]
                : gaMammonProviders[0]
              )
        } else {
          // 否则，插入广告 = 总数量 / allProviders.length + 1
          const allProviders = isMustBeGA.value
            ? gaMammonProviders
            : [...cnMammonProviders, ...gaMammonProviders]
          const targetCount = count / (allProviders.length + 1)
          allProviders.forEach((provider, index) => {
            adProviders[Math.ceil(targetCount * (index + 1)) - 1] = provider
          })
        }
        console.log('AutoMammonProviders', adProviders.slice())
      })

      return { inited, adProviders }
    }
  })
</script>

<style lang="scss" scoped>
  .homepage-examples {
    .loading {
      min-height: 24rem;
      background-color: $module-bg;
    }

    .example-item {
      .example-mammon {
        min-height: 9rem;
        overflow: hidden;
      }
    }
  }
</style>
