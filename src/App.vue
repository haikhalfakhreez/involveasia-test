<template>
  <main class="container py-16">
    <div class="grid grid-cols-2 sm:grid-cols-1 gap-8">
      <Create />
      <Browse />
    </div>
  </main>

  <footer class="text-xs p-4 bg-gray-200 relative">
    <p class="absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">Made with ❤️ by Ekal</p>
    <div class="text-right text-gray-500">
      <a href="https://github.com/haikhalfakhreez" target="_blank" rel="noopener" class="hover:text-gray-800">GitHub</a>
      <a href="https://www.linkedin.com/in/haikhalfakhreez" target="_blank" rel="noopener" class="hover:text-gray-800 ml-2">LinkedIn</a>
    </div>
  </footer>
</template>

<script>
import Create from './components/Create.vue'
import Browse from './components/Browse.vue'

export default {
  name: 'App',
  components: {
    Create,
    Browse
  }
}
</script>

<style>
:root {
  --gray: #45454a;
  --black: #1d1d1f;
}

#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--black);
  font-size: 14px;
}
</style>

<style scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  width: 90%;
  min-height: calc(100vh - 48px); /* footer's height */
}
</style>
