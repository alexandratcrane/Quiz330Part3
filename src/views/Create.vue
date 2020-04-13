<template>
  <div class="create">
    <Nav/>
   <Rendered class="rendered"/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Rendered from '@/components/Rendered.vue'
export default {
   name: 'Create',
  components: {
    Nav,
    Rendered
  }
}
</script>


<style scoped>
.rendered{
  margin-top: -50%;
}
</style>