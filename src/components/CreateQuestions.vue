<template>
    <v-app>
        <Nav/>
           <div >
      <div class = "create">
        <v-form
            ref="form"
            lazy-validation>
     
            <v-col>
               <v-card class = "v-card">
               Please select the number of questions you would like created
                     

        <v-select
        class = "v-select"
         v-model="multChoiceNum"
          :items="items"
          label="How many Multiple choice questions?"
        
        ></v-select> 

     <v-select
             class = "v-select"
           v-model="inputNum"
          :items="items"
          label="How many Input questions? "
         
        ></v-select> 
 
       <v-select
          class = "v-select"
          v-model="tfNum"
          :items="items"
          label="How many True/False questions?"
        
        ></v-select>

 
           <v-btn dark color="#cf2d2d" class="ma-2 white--text"
             v-on:click="render()">
               Submit
        </v-btn>
              </v-card>
            </v-col>
          
      


        </v-form>
      </div>
  </div>

    </v-app>
</template>

<script>
export default {
name: 'Create',
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
     answer: []
    }
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
          this.answer.push(this.inputAnswer)
          }
        

       for (let i= 0; i< this.multChoiceNum; i++){
           this.MCSingle = Array.from(this.MCSingle)
           this.multChoiceInputs[i] = this.MCSingle
             this.answer.push(this.MCSingle)
    } 
   

     for (let i= 0; i< this.tfNum; i++){
          this.tfAnswer = Array.from(this.tfAnswer)
          this.inputTF[i] = this.tfAnswer    
            this.answer.push(this.tfAnswer)   
    }


     
        console.log(this.answer)


        this.displayQuestions = true
      }

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