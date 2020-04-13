<template>
  <div >
    <Nav/>
      <div class = "create">
        <v-form
            ref="form">
     
            <v-col>
               <v-card class = "v-card">
               Please select the number of questions you would like created
                     

        <v-select
        class = "v-select"
         v-model="multChoiceNum"
          :items="items"
          label="How many Multiple choice questions?"
          solo
        ></v-select>
  
          <v-select
             class = "v-select"
           v-model="inputNum"
          :items="items"
          label="How many Input questions? "
          solo
        ></v-select>

       <v-select
          class = "v-select"
          v-model="tfNum"
          :items="items"
          label="How many True/False questions?"
          solo
        ></v-select>
     
         
             <v-btn
             v-on:click="render()">
               Submit
        </v-btn>
              </v-card>
            </v-col>
          
      
        </v-form>

        <v-form
            ref="form">
            <v-col>
                <v-card class = "v-card">
           TODO: render on submit for UI questions for quiz based on result

           
                </v-card>


               <router-link class="routerLink" to="/view-quiz">
      <v-btn x-large color="blue"
      class="ma-2 white--text">
          Create a new Quiz
      </v-btn>
      </router-link>
       


            </v-col>
        </v-form>

   </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  
   name: 'Create',
   
  components: {
    Nav,
  
  },
  data(){
    return {
      items: [0,1, 2, 3, 4, 5],
      multChoiceNum: null,
      inputNum: null,
      tfNum : null,

    }
  },
  methods: {
    render(){
      alert(this.multChoiceNum)
      alert(this.inputNum)
      alert(this.tfNum)
    }
  }

}
</script>


<style scoped>
.create{
  margin-top: -50%;
}
.v-card{
   margin-left: auto;
    margin-right: auto;
    width: 450px;
    padding: 10px 20px;
    margin-top: 20px;
    
}

.v-select{
  margin-top: 25px;
}
.routerLink{
     text-decoration: none;
     margin: 25px;
     
}
</style>