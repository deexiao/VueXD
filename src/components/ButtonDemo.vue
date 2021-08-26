<template>
  <Button
    size="large"
    disabled
    @click="onClick"
    @focus="onClick"
    @mouseover="onClick"
    >hello</Button
  >
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log('hi')
    }
    return { onClick }
  },
}
</script>

<style lang="scss" scoped></style>
