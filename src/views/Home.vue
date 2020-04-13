<template>
<v-app>
    <div class="home">
        
       <h1> Welcome to the quiz app! </h1>
        <a href="/" ><img src="@/assets/mushy.png"> </a>

    
      <router-link class="routerLink" to="/create-quiz">
      <v-btn x-large color="blue"
      class="ma-2 white--text">
          Create a new Quiz
      </v-btn>
      </router-link>
 
      <router-link class="routerLink" to="/default-quiz">
       <v-btn x-large color="blue" 
       class="ma-2 white--text">

       
          Use Quiz Template
      </v-btn>
      </router-link>

   
    <router-view/>
    </div>
</v-app>
</template>
<script>


export default {
    
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