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

 
             <v-btn dark color="#cf2d2d" class="ma-2 white--text"
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
                
                
                 <div  v-for="(item, index) in multChoiceInputs" :key="index">
                 
                 <v-card
                  raised
                  class="mx-auto">
                  
                  <v-text-field  outlined v-model="item.question" placeholder="What is your Multiple Choice question?" ></v-text-field>
                  <v-text-field  outlined v-model="item.trueAnswer"  :value="item.trueAnswer" placeholder="What is the true answer?" class="mx-auto" ></v-text-field>
                  <v-text-field  outlined v-model="item.false1" :value="item.false1" placeholder="What is the a false answer?" class="mx-auto" ></v-text-field>
                  <v-text-field  outlined v-model="item.false2" :value="item.false2" placeholder="What is the a false answer?" class="mx-auto" ></v-text-field>
                  <v-text-field  outlined v-model="item.false3" :value="item.false3" placeholder="What is a false answer?" class="mx-auto" ></v-text-field>

                 </v-card>
               
               
             
            
                  </div> 


                   <div
                  v-for="(item, index) in inputInput" 
                  :key="index"
                  class="mx-auto">
               
               <v-card
                  raised
                 class="mx-auto">
              
                    
                <v-text-field  outlined v-model="item.question" placeholder="Your Question" class="mx-auto" ></v-text-field>
                <v-text-field  outlined v-model="item.answer" placeholder="What is the answer?" class="mx-auto" ></v-text-field>
                 <p>The value of the input is: {{ item.question }}</p>
                  <p>The value of the answer is: {{ item.answer }}</p>
              
                </v-card>
              
                </div>   

                 



  <div
   v-for="(item, index) in inputTF" :key="index">
                 <v-card
                  raised
                  class="mx-auto">
                  <v-text-field  outlined v-model="item.question" placeholder="What is your True/False question?" class="mx-auto" ></v-text-field>
                  <v-text-field  outlined v-model="item.Tanswer" placeholder="What is the TRUE answer?" class="mx-auto" ></v-text-field>
                  <v-text-field  outlined v-model="item.Fanswer" placeholder="What is the FALSE answer?" class="mx-auto" ></v-text-field>

                 </v-card>
               
               
              
                  </div> 

            
<!-- 
               <router-link class="routerLink" to="/view-quiz"> -->


      <v-btn style="margin-top: 50px; margin-bottom: 50px;" x-large color="blue"
      class="ma-2 white--text"
        v-on:click="logger()">
          Create a new Quiz
      </v-btn>
      <!-- </router-link>  -->
       


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

      multChoiceInputs: [],
      qs: {"question": ''},
      as: {"answer": ''},
      MCSingle: [
       
        {"question": ''},
        {"trueAnswer": '' },
        { "false1": ''},
        {"false2": ''},
        {"false3": ''}
        ],

      inputInput: [],
     inputAnswer:  [{"question": ''},{"answer": ''} ],
      input: [],
      inputTF: [],
      tfAnswer: [
        {"question": ''},
        {"Tanswer": ''},
        {"Fanswer": ''}
      ],
      All_ans: []





    }
  },
  afterUpdate(){
  },
  methods: {
   
   
    render: function(){

      if ( this.tfNum== null || this.inputNum == null || this.multChoiceNum == null){
         alert('Please fill in all required questions.')
            return;
      }else{
       
         this.inputTF.length =  this.items[this.tfNum]
         this.multChoiceInputs.length = this.items[this.multChoiceNum]
      
      
       
        this.inputInput.length = this.items[this.inputNum]


          for (let i= 0; i< this.inputNum; i++){
           this.inputAnswer = Array.from(this.inputAnswer)
     this.inputInput[i] = this.inputAnswer

          }

       for (let i= 0; i< this.multChoiceNum; i++){
           this.MCSingle = Array.from(this.MCSingle)

     this.multChoiceInputs[i] = this.MCSingle
    }

     for (let i= 0; i< this.tfNum; i++){
           this.tfAnswer = Array.from(this.tfAnswer)
     this.inputTF[i] = this.tfAnswer       
    }
    
    console.log(this.inputTF)

  this.displayQuestions = true




    
  
      }

    },

     logger: function(){
    console.log(this.inputInput)
    console.log(this.inputTF)
    console.log(this.multChoiceInputs)
    },

    appendAnswers(){
      this.All_ans = this.inputInput.concat(this.multChoiceInputs);
      this.All_as = this.All_ans.concat(this.inputTF);
      this.saveToFile(this.All_ans)
    },
  
  }

}
</script>


<style scoped>
.create{
  margin: -50%;
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