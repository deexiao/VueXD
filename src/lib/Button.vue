<template>
  <button class="VueXD-button" :class="`theme-${theme}`">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: 'button',
    },
  },
  setup(props, context) {},
}
</script>

<style lang="scss">
div {
  border: 1px solid red;
}
</style>
