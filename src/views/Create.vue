  <template>
  <v-app>
      <Nav/>
  <div >
      <div class = "create">
         <div>
                    <h3>{{name}}</h3>
        </div>
        <v-form
            ref="form">


          <v-card class = "v-card">
            <v-title> Name your Quiz </v-title>
             <v-text-field  outlined v-model="name" id = "name" placeholder="Survey Name" class="mx-auto" ></v-text-field>
          </v-card>
              <v-card class = "v-card">
            <v-title>  Give Quiz ID </v-title>
             <v-text-field  outlined v-model="id" id = "id" placeholder="Survey Name" class="mx-auto" ></v-text-field>
          </v-card>

            


            <v-col>
            <v-card class = "v-card"> Please select the number of questions you would like created
                     

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
  <div id= "Cquestions"> 
      <v-form>
            <v-col>
            


                  <div v-for="(item, index) in ans" :key="index">
                    
                 <v-card
                  raised
                  class="mx-auto"
                   v-if="item.length == 5">
                  
                  <v-text-field outlined v-model="item.question" placeholder="What is your Multiple Choice question?" />
                  <v-text-field   outlined v-model="item.trueAnswer"   placeholder="What is the true answer?" class="mx-auto" />
                  <v-text-field   outlined v-model="item.false1"  placeholder="What is the a false answer?" class="mx-auto" />
                  <v-text-field  outlined v-model="item.false2"  placeholder="What is the a false answer?" class="mx-auto"/>
                  <v-text-field   outlined v-model="item.false3"  placeholder="What is a false answer?" class="mx-auto" />

                 </v-card>

                  <v-card
                  raised
                 class="mx-auto"
                  v-if="item.length == 2">
              
                    
                <v-text-field  outlined v-model="item.question" placeholder="Your Question" class="mx-auto" />
                <v-text-field  outlined v-model="item.answer" placeholder="What is the answer?" class="mx-auto"/>
     
                </v-card>


                  
                 <v-card
                  raised
                  class="mx-auto"
                  v-if="item.length == 3">
                  <v-text-field   outlined v-model="item.question" placeholder="What is your True/False question?" class="mx-auto" />
                  <v-text-field   outlined v-model="item.Tanswer" placeholder="What is the TRUE answer?" class="mx-auto" />
                  <v-text-field  outlined v-model="item.Fanswer" placeholder="What is the FALSE answer?" class="mx-auto" />

                 </v-card>


                  </div>


       

      <v-btn style="margin-top: 50px; margin-bottom: 50px;" x-large color="blue"
      class="ma-2 white--text"
        v-on:click="submitSurvey">
          Create a new Quiz
      </v-btn>
       </v-col>
      </v-form>
            </div>
    </v-app>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
name: 'Create',

components:{
    Nav
},
data(){
      return {

      name: '',
      id: '',
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
    //for template creation
     ans: [],
     //for Q&A creation
     questions: []
    }
  },
 
 
  methods: {
    render: function(){

      if ( this.tfNum == null || this.inputNum == null || this.multChoiceNum == null){
         alert('Please fill in all required questions.')
            return
            
      }else{
         this.inputTF.length =  this.items[this.tfNum]
         this.multChoiceInputs.length = this.items[this.multChoiceNum]
         this.inputInput.length = this.items[this.inputNum]
       
          
          for (let i= 0; i< this.inputNum; i++){
          this.inputAnswer = Array.from(this.inputAnswer)
          this.inputInput[i] = this.inputAnswer
          this.ans.push(this.inputAnswer)
          }
        

       for (let i= 0; i< this.multChoiceNum; i++){
           this.MCSingle = Array.from(this.MCSingle)
           this.multChoiceInputs[i] = this.MCSingle
             this.ans.push(this.MCSingle)
    } 
   

     for (let i= 0; i< this.tfNum; i++){
          this.tfAnswer = Array.from(this.tfAnswer)
          this.inputTF[i] = this.tfAnswer    
            this.ans.push(this.tfAnswer)   
    }


     
   


        this.displayQuestions = true
    }

    },

       submitSurvey() {
         this.questions = this.ans
          console.log(this.questions)
          alert(this.questions)
    this.$store.dispatch('submitNewSurvey', {
      name: this.name,
      id: this.name,
      questions: this.questions

   
    }).then(() => this.$router.push('/'))
   
  },
  
   appendQuestion(CreateQuestion) {
      this.questions.push(CreateQuestion)
    },
    
    saveQuestion() {
       this.appendQuestion(this.ans)
      this.$emit('questionComplete', {
        question: this.question,
      
      })
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