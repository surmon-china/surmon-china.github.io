<template>
  <div>
    <h1>{{ greeting }}</h1>
    <button @click="changeGreeting">Click me!</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        greeting: 'Hello, Vue 3!'
      }
    },
    methods: {
      changeGreeting() {
        this.greeting = 'Hello, Vue 3 Updated!'
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: blue;
  }
</style>
