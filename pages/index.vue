<template>
  <div>
    <TopNav/>
    <h1>Home Page</h1>
    <Gallery/>
  </div>
</template>

<script>
import TopNav from '../components/nav/TopNav.vue'
import Gallery from '../components/gallery/Gallery.vue'
export default {
  name: 'IndexPage',
  components: { TopNav}
}
</script>

<style scoped>
</style>