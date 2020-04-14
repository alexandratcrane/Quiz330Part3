<template>
<v-app>
    <Nav/>

    <div class = "render">
        <h1> 
          JSON should be saved to a file, 

          Python backend should reformat the saved JSON

          THE JSON must be under a uniform name!! User will not be able to name their quiz, or else we will have a lot of trouble rendering it.
           What we can do is allow them to name it if we ever push it to a database, so other peeps can view their quiz.

           </h1>
        
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