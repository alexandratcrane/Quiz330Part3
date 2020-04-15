<template>
  <div >
    <Nav/>
      <div class = "create">
        <v-form
            ref="form">
     
            <v-col>
               <v-card class = "v-card">
               Please select the number of questions you would like created
                     
<!--
        <v-select
        class = "v-select"
         v-model="multChoiceNum"
          :items="items"
          label="How many Multiple choice questions?"
          solo
        ></v-select> 
-->
          <v-select
             class = "v-select"
           v-model="inputNum"
          :items="items"
          label="How many Input questions? "
         
        ></v-select>
<!-- 
       <v-select
          class = "v-select"
          v-model="tfNum"
          :items="items"
          label="How many True/False questions?"
   
        ></v-select> -->

 
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
                <!--
                
                <div  v-for="item in multChoiceInputs" :key="item.question">
                  TODO: changing key only allows for one keystroke at at a time
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

-->
                   <div
                  v-for="(item, index) in inputInput" 
                  :key="index"
                  class="mx-auto">
               
               <v-card
                  raised
                 class="mx-auto">
              
                    
                <v-text-field  outlined v-model="item.question" placeholder="Your Question" class="mx-auto" ></v-text-field>
                <v-text-field  outlined v-model="item.answer" placeholder="What is the answer?" class="mx-auto" ></v-text-field>
              
                </v-card>
              
                </div> 

                 
                  <!-- <div v-for="(item, index) in inputTF" :key="index"
                  class="mx-auto">


                 <v-card
                  raised
                  class="mx-auto">
         
                  <v-text-field  outlined v-model="item.question" placeholder="What is your True/False question?" class="mx-auto" ></v-text-field>
                  <v-text-field  outlined v-model="item.Tanswer" placeholder="What is the TRUE answer?" class="mx-auto" ></v-text-field>
                  <v-text-field  outlined v-model="item.Fanswer" placeholder="What is the FALSE answer?" class="mx-auto" ></v-text-field>

                 </v-card>
               
               
              
                  </div>  -->

           

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
      displayQuestions: true,

      
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
     inputAnswer:  [{question: ''},{answer: ''} ],
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

   beforeUpdate(){
          
           this.inputInput =   this.create_questions(this.inputNum, this.inputInput, this.inputAnswer);
            // this.inputTF =   this.create_questions(this.tfNum, this.inputTFt, this.tfAnswer);
          this.displayQuestions = true
 },
  methods: {
   
    render: function(){

      if ( this.inputNum == null){
         alert('Please fill in all required questions.')
            return;
      }else{
       
        this.inputTF.length =  this.items[this.tfNum]
        console.log(this.tfNum)
        // this.multChoiceInputs.length = this.items[this.multChoiceNum]
       
        this.inputInput.length = this.items[this.inputNum]


          for (let i= 0; i< this.inputNum; i++){
           this.inputAnswer = Array.from(this.inputAnswer)
     //console.log(typeof(ans))
     this.inputInput[i] = this.inputAnswer  
    }

    //   for (let i= 0; i< this.tfNum; i++){
    //        this.tfAnswer = Array.from(this.tfAnswer)
    //  //console.log(typeof(ans))
    //  this.inputTF[i] = this.inputTF
    // }
    
    console.log(this.inputTF)




         
      // this.create_questions(this.multChoiceNum, this.multChoiceInputs, this.MCSingle);


         
      // this.create_questions(this.tfNum, this.inputTF, this.inputAnswer)

        this.displayQuestions = true
      }

    },

    appendAnswers(){
      this.All_ans = this.inputInput.concat(this.multChoiceInputs);
      this.All_ans = this.All_ans.concat(this.inputTF);
      this.saveToFile(this.All_ans)
    },
    create_questions(numberOfQuestions, list, ans){
      
         for (let i= 0; i< numberOfQuestions; i++){
           ans = Array.from(ans)
     //console.log(typeof(ans))
     list[i] = ans
        
       
          
    }
    
 //  console.log(list)
   return list
    } 

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