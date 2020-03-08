
import * as http from '~/services/http'
import { computed, ref, provide, inject } from '@vue/composition-api'

export enum FileFormat {
  'Vue' = 'vue',
  'JavaScript' = 'javascript',
  'TypeScript' = 'typescript'
}

const modalSymbol = Symbol()
const createModalStore = () => {
  const visible = ref<boolean>(false)
  const filePath = ref<string>(null)
  const fileTitle = ref<string>(null)

  const fileUrl = ref<string>(null)
  const fileName = ref<string>(null)
  const fileContent = ref<string>(null)

  const isLoading = ref<boolean>(false)

  const fileExt = computed(() => {
    if (filePath) {
      if (filePath.value?.endsWith('.vue')) {
        return FileFormat.Vue
      }
      if (filePath.value?.endsWith('.js')) {
        return FileFormat.JavaScript
      }
      if (filePath.value?.endsWith('.ts')) {
        return FileFormat.TypeScript
      }
    }
  })
  
  const open = (title: string, path: string) => {
    visible.value = true
    filePath.value = path
    fileTitle.value = title

    isLoading.value = true
    http.getFileContent(path)
      .then(result => {
        fileName.value = result.name
        fileUrl.value = result.html_url
        fileContent.value = window.atob(`${result.content}`)
      }).finally(() => {
        isLoading.value = false
      })
  }
  
  const close = () => {
    visible.value = false
    fileName.value = null
    fileUrl.value = null
    fileContent.value = null
  }

  return {
    visible,
    title: fileTitle,
    path: filePath,
    content: fileContent,
    fileExt,
    fileUrl,
    isLoading,
    open,
    close
  }
}

export type IModalStore = ReturnType<typeof createModalStore>

export function provideModalStore() {
  provide(modalSymbol, createModalStore())
}

export function useModalStore(): IModalStore {
  const store = inject(modalSymbol) as IModalStore
  if (!store) {
    throw new Error('No modal store provided!')
  }

  return store
}
