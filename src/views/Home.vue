<template>
<v-app>
    <div class="home">
        
       <h1> Welcome to the quiz app! </h1>
        <a href="/" ><img src="@/assets/mushy.png"> </a>

    
      <router-link class="routerLink" to="/create-quiz">
      <v-btn x-large color="#cf2d2d"
      class="ma-2 white--text">
          Create a new Quiz
      </v-btn>
      </router-link>
 
      <router-link class="routerLink" to="/default-quiz">
       <v-btn x-large color="#cf2d2d" 
       class="ma-2 white--text">

       
          Use Quiz Template
      </v-btn>
      </router-link>


         <v-card>
             <h5> View recent quizzes </h5>
             <div v-for="survey in surveys" v-bind:key="survey.id">


                 <router-link :to="`surveys/${survey.id}`" class="card-footer-item">
                 <v-btn>
         {{ survey.name}}
                 </v-btn>

                 </router-link>

             </div>
         </v-card>
   
    <router-view/>
    </div>
</v-app>
</template>
<script>
import { mapState } from 'vuex'


export default {
    name: 'home',
    computed: mapState({
    surveys: state => state.surveys
  }),
  beforeMount(){
      
      this.$store.dispatch('loadSurveys')
      
  }
    
}
</script>

<style scoped>
.routerLink{
     text-decoration: none;
     margin: 25px;
     
}
v-btn{
     text-decoration: none;
    
}
img{
    margin-bottom: 125px;
}
</style>