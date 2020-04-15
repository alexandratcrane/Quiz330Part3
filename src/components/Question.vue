<template>
<v-app>
    <div>

        <v-form
            ref="form">
            <v-col>
              <v-card
                     v-for="q in fill"
                    :key="q.question"
                    raised
                    class="mx-auto">
                    <div>

                        <v-card-title
                            class="Headline"
                            v-text="q.question">
                        </v-card-title>

                        <v-text-field  outlined v-model="q.input" placeholder="Your answer" class="mx-auto" ></v-text-field>

                  <p style="text-align: center" id="correct" >Your answer: {{ q.input }}</p>   
                    <v-card-subtitle
                        v-if="displayAnswer == true"
                        v-text="'correct answer: ' + q.answer"
                        v-bind:style=" q.correct ? 'background-color: #79d279' : 'background-color: #e60000' "> 
                        
                        </v-card-subtitle>
                    </div>
                </v-card>


                  <v-card
                     v-for="q in multChoice"
                    :key="q.question"
                    raised
                    class="mx-auto">
                    <div>

                    <v-radio-group  v-model="q.input">

                        <v-card-title>{{q.question}}</v-card-title>

                     
                        <v-radio 
                         
                            v-for="n in q.button"
                            :key="n" 
                            :label="`${n}`" >
                        
                        </v-radio>
                  
                    </v-radio-group>
                                         <v-card-subtitle
                    v-if="displayAnswer == true"
                     v-text="'Your answer:  ' + q.input"
                     ></v-card-subtitle>
                     <v-card-subtitle
                    v-if="displayAnswer == true"
                    
                    v-text="'correct answer number:  ' + q.answer"
                    v-bind:style=" q.correct ? 'background-color: #79d279' : 'background-color: #e60000' ">
                    </v-card-subtitle>

                    </div>
                </v-card> 




                    <v-card
                     v-for="q in trueFalse"
                    :key="q.question"
                    raised
                    class="mx-auto">
                    <div>

                           <v-radio-group v-model="q.input">
                        <v-card-title>{{q.question}} </v-card-title>
                        <v-radio 
                            class="ml-7"
                            v-for="n in q.options"
                            :key="n" 
                            :label="`${n}`">
                        </v-radio>
                         </v-radio-group>
                          <v-card-subtitle
                    v-if="displayAnswer == true"
                     v-text="'Your answer:  ' + q.input"
                     ></v-card-subtitle>
                          <v-card-subtitle
                    v-if="displayAnswer == true"
                    v-text="'correct answer: ' + q.answer"
                    v-bind:style=" q.correct ? 'background-color: #79d279' : 'background-color: #e60000' ">
                    </v-card-subtitle>
                    </div>

                    </v-card>                 
            </v-col>
             
        </v-form>   
       
    <v-btn
        x-large
        dark
        color="success"
        type="submit"
        class="mx auto"
        extra large
        v-on:click="validateJSON()">
        Submit
        </v-btn> 

    </div>
     </v-app>

</template>


<script>
import Json from '../json/data.json'
export default {
    data() {
        return{
            fill: Json.filled,
            multChoice: Json.multChoice,
            trueFalse:Json.TF,
            displayAnswer: false
        }
    },
    methods: {
        processInput(input){
        input = input.toLowerCase();
        input = input.replace(/['"]+/g, '')
        
        if (input == "" || /\s/.test(input)){
            alert('No spaces in your input. This answer will not be accepted.')
            input = ''
            return;
        } else { 
            return input;
            }
        },

    // Checks to see if JSON in fill type questions is true or false
    checkAgainstAnswerFill(qFilled){
        for( let i =0; i< qFilled; i++){
            var input =this.processInput(JSON.stringify(this.qFilled[i].input))
            var answer = this.processInput(JSON.stringify(qFilled[i].answer))
                alert(i)
             if (input == answer){
                 qFilled[i].correct = true
                 alert(qFilled[i].correct)
             }else {
                  qFilled[i].correct = false
             }
        }
    },
   
    validateJSON(){
    try { 
    alert('hi)')
   this.checkAgainstAnswerFill(this.fill)
    for( let i =0; i< this.fill; i++){
  if (this.processInput(JSON.stringify(this.fill[i].input)) == this.processInput(JSON.stringify(this.fill[i].answer))){
                
                 this.fill[i].correct = true
                 alert(this.fill[i].correct)
             }else {
                 this.fill[i].correct = false
             }
    }
   this.checkAll(this.multChoice)
   this.checkAll(this.trueFalse)
    this.displayAnswer =  true
    
    }catch(e) { alert(e); } 
    
},
checkAll(qType){
      for (let i= 0; i< qType; i++){
      if (this.qType[i].input == this.qType[i].answer){
    this.qType[i].correct = true
}else{
    this.qType[i].correct = false
} 
      }
},


    }
}
    
</script>

<style scoped>
.v-card__text, .v-card__title {
  word-break: normal; 
  color:black;
}
.v-btn {
    margin-bottom:5%;
    margin-left: auto;
    margin-right: auto;

    margin-top: 50px;
}
.v-card{
   margin-left: auto;
    margin-right: auto;
    width: 450px;
    padding: 10px 20px;
    margin-top: 20px;
    
}
    
</style>