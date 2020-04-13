<template>
<v-app>
    <Nav/>

    <div class = "render">
        <h1> quiz creation will go here
            TODO: recode question so that it will utilitze the formatting of both rendered quiz and created quiz, so another component doesnot need to be created </h1>
        
    </div>
</v-app>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
    
  name: 'Render',
  components: {
    Nav
  }
}
</script>
<style scoped>
.render{
    margin-top: -50%;
}
</style>