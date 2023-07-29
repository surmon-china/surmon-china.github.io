<script lang="ts" setup>
  import { computed, reactive, ref, onBeforeMount } from 'vue'
  import Mammon, { MammonProvider, customMammonProviders, unionMammonProviders } from '@/components/mammon/index'
  import { useVisitor } from '@/composables/visitor'
  import { ExampleComponent } from '@/transforms/example'
  import Modal from '@/components/common/modal.vue'
  import HomepageCard from './card.vue'

  interface Props {
    examples: Array<ExampleComponent>
    disabledAutoAd?: boolean
    contentClass?: string
  }

  const props = withDefaults(defineProps<Props>(), {})

  const visitor = useVisitor()
  const activeExampleIndex = ref<number | null>(null)
  const isVisibleExampleModal = computed(() => Number.isInteger(activeExampleIndex.value))
  const activeExample = computed(() => props.examples[activeExampleIndex.value!] || null)
  const openExampleModal = (index: number) => {
    activeExampleIndex.value = index
  }
  const closeExampleModal = () => {
    activeExampleIndex.value = null
  }

  const AD_BOUNDARY = 6
  const adProviders = reactive<Array<MammonProvider | null>>(props.examples.map(() => null))

  onBeforeMount(() => {
    const count = props.examples.length
    // MARK: GA only
    const gaOnly = true
    // const gaOnly = !visitor.isZhLangGuest || visitor.isMobileDevice
    // 如果总数小于临界值，则仅在中间显示一个
    if (count <= AD_BOUNDARY) {
      const targetIndex = Math.ceil(count / 2)
      // Global User || Mobile -> GA -> GA(60%)
      adProviders[targetIndex - 1] = gaOnly
        ? unionMammonProviders[0]
        : Math.ceil(Math.random() * 10) > 6
        ? customMammonProviders[0]
        : unionMammonProviders[0]
    } else {
      // ad = total / allProviders.length + 1
      const allProviders = gaOnly ? unionMammonProviders : [...customMammonProviders, ...unionMammonProviders]
      const targetCount = count / (allProviders.length + 1)
      allProviders.forEach((provider, index) => {
        adProviders[Math.ceil(targetCount * (index + 1)) - 1] = provider
      })
    }

    // console.log('AutoMammonProviders', adProviders.slice())
  })
</script>

<template>
  <div class="examples">
    <modal
      :visible="isVisibleExampleModal"
      :title="`${activeExample?.title} (Edit on GitHub)`"
      :title-url="activeExample?.url || ''"
      @close="closeExampleModal"
    >
      <template #content>
        <highlightjs
          class="highlight"
          contenteditable="true"
          onkeydown="if(event.metaKey) return true; return false;"
          :code="activeExample?.raw"
          :language="activeExample?.language"
        />
      </template>
    </modal>
    <div class="example-item" :key="example.name" v-for="(example, index) in examples">
      <homepage-card :title="example.title || example.name" :content-class="contentClass">
        <template #actions>
          <div class="actions">
            <slot name="actions"></slot>
            <button class="code-button" @click="openExampleModal(index)">
              <i class="iconfont icon-code" />
            </button>
          </div>
        </template>
        <slot name="component" v-bind="example"></slot>
      </homepage-card>
      <template v-if="!disabledAutoAd">
        <homepage-card class="example-mammon" v-if="adProviders[index]">
          <mammon :provider="adProviders[index] || undefined" />
        </homepage-card>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .highlight {
    margin: 0;
    line-height: 1.5em;
    cursor: text;
  }

  .examples {
    .example-item {
      .actions {
        display: flex;
        height: 100%;
        align-items: center;

        .code-button {
          border: none;
          background-color: transparent;
          cursor: pointer;
          color: $text-color;
          &:hover {
            color: $link-color;
          }

          .iconfont {
            font-size: $font-size-base + 3;
          }
        }
      }

      .example-mammon {
        min-height: 9rem;
        overflow: hidden;
      }
    }
  }
</style>
