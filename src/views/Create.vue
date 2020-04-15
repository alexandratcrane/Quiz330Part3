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

         
             <v-btn color="#cf2d2d" class="ma-2 white--text"
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
                  <!-- TODO: changing key only allows for one keystroke at at a time-->
                 <v-card
                  raised
                  v-for="item in multChoiceInputs" :key="item.question"
                  class="mx-auto">
                  
    <v-text-field  outlined v-model="item.question" placeholder="What is your Multiple Choice question?" ></v-text-field>
                   <v-text-field  outlined v-model="item.trueAnswer"  :value="item.trueAnswer" placeholder="What is the true answer?" class="mx-auto" ></v-text-field>
                    <v-text-field  outlined v-model="item.false1" :value="item.false1" placeholder="What is the a false answer?" class="mx-auto" ></v-text-field>
                     <v-text-field  outlined v-model="item.false2" :value="item.false2" placeholder="What is the a false answer?" class="mx-auto" ></v-text-field>
                      <v-text-field  outlined v-model="item.false3" :value="item.false3" placeholder="What is a false answer?" class="mx-auto" ></v-text-field>

                 </v-card>
               
               
             
            
                  </div> 


                   <div>
               <v-card
                  raised
                  v-for="item in inputInput" :key="item.question"
                  class="mx-auto">
                  <!--TODO: fix formatting error for input question 
                  Duplicate keys detected-->
                  <v-text-field  outlined v-model="item.question" placeholder="What is your Input question?" class="mx-auto" ></v-text-field>
                  <v-text-field  outlined v-model="item.answer" placeholder="What is the answer?" class="mx-auto" ></v-text-field>
                 </v-card>
              
               
              
                  </div> 

                 



  <div>
                 <v-card
                  raised
                  v-for="item in inputTF" :key="item.question"
                  class="mx-auto">
                  <!-- TODO: fix formatting error for TF questions
                  Duplicate keys detected -->
                  <v-text-field  outlined v-model="item.question" placeholder="What is your True/False question?" class="mx-auto" ></v-text-field>
                    <v-text-field  outlined v-model="item.Tanswer" placeholder="What is the TRUE answer?" class="mx-auto" ></v-text-field>
                      <v-text-field  outlined v-model="item.Fanswer" placeholder="What is the FALSE answer?" class="mx-auto" ></v-text-field>

                 </v-card>
               
               
              
                  </div> 

               <router-link class="routerLink" to="/view-quiz">


      <v-btn style="margin-top: 50px; margin-bottom: 50px;" x-large color="blue"
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

      
      multChoiceInputs: [],
      MCSingle: [
        {'test': 'test'},
        {'question': ''},
        {'trueAnswer': '' },
        {'false1': ''},
        {'false2': ''},
        {'false3': ''}
        ],

      inputInput: [],
      inputAnswer: [
        {'question': ''},
        {'answer': ''}
      ],


      inputTF: [],
      tfAnswer: [
        {'question': ''},
        {'Tanswer': ''},
        {'Fanswer': ''}
      ],
      All_ans: []





    }
  },
  methods: {

    render(){
      if (this.tfNum == null ||  this.multChoiceNum== null ||  this.inputNum == null){
         alert('Please fill in all required questions.')
            return;
      }else{
        this.displayQuestions = true
        this.inputTF.length =  this.items[this.tfNum]
        this.multChoiceInputs.length = this.items[this.multChoiceNum]
        this.inputInput.length = this.items[this.inputNum]
     
      this.create_questions(this.multChoiceNum, this.multChoiceInputs, this.MCSingle);
      this.create_questions(this.inputNum, this.inputInput, this.inputAnswer);
      this.create_questions(this.tfNum, this.inputTF, this.inputAnswer)
      }

    },
    saveToFile(json){
    var fs = require('fs');
    fs.writeFile('src/json/created.json', json, 'utf8');
    },

    appendAnswers(){
      this.All_ans = this.inputInput.concat(this.multChoiceInputs);
      this.All_ans = this.All_ans.concat(this.inputTF);
      this.saveToFile(this.All_ans)


    },
    create_questions(numberOfQuestions, list, formattedJson){
         for (let i= 0; i< numberOfQuestions; i++){
        list[i] = formattedJson
      }
    }

  }

}
</script>


<style scoped>
.create{
  
  top: 100px;
  margin-left: 30%;
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