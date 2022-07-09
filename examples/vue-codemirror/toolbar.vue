<template>
  <div class="toolbar">
    <div class="item">
      <label for="language">language:</label>
      <select
        name="language"
        id="language"
        :disabled="disabled"
        :value="config.language"
        @change="handleSelectLanguage"
      >
        <option :value="option" :key="option" v-for="option in languages">
          {{ option }}
        </option>
      </select>
    </div>
    <div class="item">
      <label for="theme">theme:</label>
      <select name="theme" id="theme" :disabled="disabled" v-model="config.theme">
        <option :value="option" :key="option" v-for="option in ['default', ...themes]">
          {{ option }}
        </option>
      </select>
    </div>
    <div class="item">
      <label for="disabled">disabled:</label>
      <input type="checkbox" id="disabled" :disabled="disabled" v-model="config.disabled" />
    </div>
    <div class="item">
      <label for="autofocus">autofocus:</label>
      <input
        type="checkbox"
        id="autofocus"
        :disabled="disabled"
        v-model="config.autofocus"
      />
    </div>
    <div class="item">
      <label for="indentWithTab">indentWithTab:</label>
      <input
        type="checkbox"
        id="indentWithTab"
        :disabled="disabled"
        v-model="config.indentWithTab"
      />
    </div>
    <div class="item">
      <label for="tabSize">tabSize:</label>
      <select
        name="tabSize"
        id="tabSize"
        :disabled="disabled"
        v-model.number="config.tabSize"
      >
        <option :value="option" :key="option" v-for="option in [2, 4, 6, 8]">
          {{ option }}
        </option>
      </select>
    </div>
    <div class="item">
      <label for="height">height:</label>
      <select name="height" id="height" :disabled="disabled" v-model="config.height">
        <option
          :value="option"
          :key="option"
          v-for="option in ['auto', '200px', '40em', '60vh']"
        >
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  export default defineComponent({
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      config: {
        type: Object,
        required: true
      },
      languages: {
        type: Array as PropType<Array<string>>,
        required: true
      },
      themes: {
        type: Array as PropType<Array<string>>,
        required: true
      }
    },
    methods: {
      handleSelectLanguage(event: any) {
        this.$emit('language', event.target.value)
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';

  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    padding: 0 1em;

    .item {
      display: inline-flex;
      align-items: center;

      label {
        display: inline-block;
        margin-right: 0.2em;
      }
    }

    input,
    button,
    select {
      margin: 0;
    }

    select {
      max-width: 3em;
      max-width: 8em;
    }
  }
</style>
