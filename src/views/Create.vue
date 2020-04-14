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
                  
                 <v-card
                  raised
                  v-for="item in multChoiceInputs" :key="item.question"
                  class="mx-auto">
    <v-text-field  outlined v-model="item.question" placeholder="What is your Multiple Choice question?" class="mx-auto" ></v-text-field>
                   <v-text-field  outlined v-model="item.trueAnswer" placeholder="What is the true answer?" class="mx-auto" ></v-text-field>
                    <v-text-field  outlined v-model="item.false1" placeholder="What is the a false answer?" class="mx-auto" ></v-text-field>
                     <v-text-field  outlined v-model="item.false2" placeholder="What is the a false answer?" class="mx-auto" ></v-text-field>
                      <v-text-field  outlined v-model="item.false3" placeholder="What is a false answer?" class="mx-auto" ></v-text-field>

                 </v-card>
               
               
             
            
                  </div>


                   <div>
               <span v-for="n in inputNum"
               :key="n">
               
               
                 <v-card
                  raised
                  class="mx-auto">
                  <v-text-field  outlined v-model="inputInput[n]" placeholder="What is your Input question?" class="mx-auto" ></v-text-field>
                  <v-text-field  outlined v-model="inputAnswer[n]" placeholder="What is the answer?" class="mx-auto" ></v-text-field>
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
      items: [0,1, 2, 3, 4],
      multChoiceNum: null,
      inputNum: null,
      tfNum : null,
      displayQuestions: false,



      MCSingle: [
        {'question': ''},
        {'trueAnswer': '' },
        {'false1': ''},
        {'false2': ''},
        {'false3': ''}
        ],

     multChoiceInputs: [],
      

      //create object that will be used inside of inputmultchoice
    
      inputInput: [],
      inputAnswer: [],


      inputTF: [],





    }
  },
  methods: {
    render(){
      this.displayQuestions = true
      this.inputTF.length =  this.items[this.multChoiceNum]
      this.multChoiceInputs.length = this.items[this.multChoiceNum]
      
      this.inputInput.length = this.items[this.inputNum]
     
      for (let i= 0; i< this.multChoiceNum; i++){
        this.multChoiceInputs[i] = this.MCSingle
      }

    },
    appendAnswers(){
    //for x in input,
   // add  {x , inputanswer[x]}


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