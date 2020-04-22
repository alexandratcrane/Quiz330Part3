<template>
<v-app>
    <div>

    <v-app-bar
      absolute
      color="#cf2d2d" 
      dark
       elevate-on-scroll

      
    >

<img src="@/assets/mushy_yt.png"/>  


        <v-toolbar-title>Quiz App</v-toolbar-title>
    <v-spacer/>
          
      <router-link class="routerLink" to="/"> Home</router-link> 

      <router-link class="routerLink" to="/create-quiz">Create new quiz</router-link>

      <router-link  class="routerLink" to="/default-quiz">Use quiz template</router-link>
       <router-link  class="routerLink" to="/surveys">Survey</router-link>

      
   

      
        </v-app-bar>
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
    
      font-size: small;
     
}

img{
    width: auto;
    height: 25px;
    margin: 0%;
    margin-right: 15px;
 
}

</style>