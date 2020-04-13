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
        <div
         v-if="displayQuestions == true">
        <v-form
            ref="form">
            <v-col>
                
                   
                <div>
               <span v-for="n in multChoiceNum"
               :key="n">
               
                 <v-card
                  raised
                  class="mx-auto">
                  <v-text-field  outlined v-model="inputMultChoice[n]" placeholder="What is your Multiple Choice question?" class="mx-auto" ></v-text-field>

                 </v-card>
               
               
               
                </span>
                  </div>


                   <div>
               <span v-for="n in inputNum"
               :key="n">
               
               
                 <v-card
                  raised
                  class="mx-auto">
                  <v-text-field  outlined v-model="inputInput[n]" placeholder="What is your Input question?" class="mx-auto" ></v-text-field>

                 </v-card>
               
               
                </span>
                  </div>



   <div>
               <span v-for="n in tfNum"
               :key="n">
               
                 <v-card
                  raised
                  class="mx-auto">
                  <v-text-field  outlined v-model="inputTF[n]" placeholder="What is your True/False question?" class="mx-auto" ></v-text-field>

                 </v-card>
               
               
                </span>
                  </div>

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
      displayQuestions: false,

      inputMultChoice: [],
      inputInput: [],
      inputTF: []


    }
  },
  methods: {
    render(){
      this.displayQuestions = true
      this.inputTF.length = this.tfNum 
      this.inputMultChoice.length = this.multChoiceNum
      this.inputInput.length = this.inputNum
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