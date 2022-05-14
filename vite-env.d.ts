/// <reference types="vite/client" />

declare module 'naivebayes'
declare module 'segmentit'

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}
