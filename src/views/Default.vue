<template>
  <div class="default">
  <Nav/>
    <Question class="question"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Default',
  components: {
  Question,
  Nav
  },
methods: {
   
}
}
</script>

<style scoped>
.question{ 
  margin-top: -50%;
  } 


</style>
