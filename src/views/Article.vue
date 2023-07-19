<template>
  <div class="container">
  <footer-tabbar />
  </div>
</template>

<script>
import FooterTabbar from 'components/FooterTabbar'
// const { mapActions } = createNamespacedHelpers('test') // 可使用这种方式直接获得test模板

export default {
  name: 'Article',
  components: {
    FooterTabbar
  }
}
</script>
<style lang="scss" scoped>
.container{
  height: auto;
  width: 100%;
  padding-bottom: 50px;
}
</style>
