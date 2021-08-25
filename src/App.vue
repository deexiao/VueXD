<template>
  <div>
    导航栏 |
    <router-link to="/">Deexiao</router-link> |
    <router-link to="/xxx">Deexiao2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>
