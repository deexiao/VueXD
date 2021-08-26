<template>
  <h1>示例 1</h1>
  <Button @click="toggle">打开对话框</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="f1" :cancel="f2">
    <template v-slot:content>
      <strong>Hello</strong>
      <div>Hello</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
  <br />
  <br />
  <h1>示例 2</h1>
  <Button @click="showDialog">封装对话框</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { openDialog } from '../lib/openDialog'

import { ref, h } from 'vue'
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return true
    }
    const f2 = () => {}
    const showDialog = () => {
      openDialog({
        title: () => h('strong', {}, '标题'),
        content: () => 'Hello',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        },
      })
    }
    return { toggle, x, f1, f2, showDialog }
  },
}
</script>
