<template>
  <UserIndex />
</template>

<script>
import UserIndex from './components/User/Index'

export default {
  name: 'App',
  components: {
    UserIndex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
