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



                        <v-text-field  outlined v-model="q.input" placeholder="Your answer" class="mx-auto"

                        ></v-text-field>

  
                    <v-card-subtitle
                        v-if="displayAnswer == true"
                        v-text="'correct answer: ' + q.answer"
                        v-bind:style=" q.correct ? 'background-color: #79d279' : 'background-color: #e60000' "> 

                        </v-card-subtitle>
                    </div>
                </v-card>

                <v-card
                    raised
                    class="mx-auto">




                    <v-radio-group  v-model="one.input">

                        <v-card-title>{{one.question}}</v-card-title>
                        <div  v-for="(n, idx) in one.button"
                            :key="n">
                            {{idx}}
                        <v-radio 
                        class="idx"
                            :label="`${n}`" >
                        </v-radio>
                        </div>
                    </v-radio-group>
                     <v-card-subtitle
                    v-if="displayAnswer == true"
                    v-text="'correct input number:  ' + one.answer"
                    v-bind:style=" one.correct ? 'background-color: #79d279' : 'background-color: #e60000' ">
                    </v-card-subtitle>
                </v-card> 


                <v-card
                    raised
                    class="mx-auto">




                    <v-radio-group  v-model="two.input">

                        <v-card-title>{{two.question}}</v-card-title>
                        <div  v-for="(n, idx) in two.button"
                            :key="n" >
                            {{idx}}
                        <v-radio 
                        class="idx"
                            :label="`${n}`" >
                        </v-radio>
                        </div>
                    </v-radio-group>

                     <v-card-subtitle
                    v-if="displayAnswer == true"
                    v-text="'correct input number:  ' + two.answer"
                    v-bind:style=" one.correct ? 'background-color: #79d279' : 'background-color: #e60000' ">
                    </v-card-subtitle>
                </v-card> 


                <v-card
                    raised
                    class="mx-auto">




                    <v-radio-group v-model="trueFalse.input">
                        <v-card-title>{{trueFalse.question}} </v-card-title>
                        <div  v-for="(n,idx) in trueFalse.options"  :key="n">
                        {{idx}}
                        <v-radio 
                            class="idx"
                            :label="`${n}`">
                            
                        </v-radio>
                        </div>

                    </v-radio-group>

                     <v-card-subtitle
                    v-if="displayAnswer == true"
                    v-text="'correct answer: ' + trueFalse.answer"
                    v-bind:style=" trueFalse.correct ? 'background-color: #79d279' : 'background-color: #e60000' ">
                    </v-card-subtitle>
                </v-card> 




            </v-col>

        </v-form>   

    <v-btn
        color="red"
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
import Json from '@/api/json/data.json'
export default {
    data() {
        return{
           fill: Json.filled,
           one: Json.multChoice1,
           two: Json.multChoice2,
           trueFalse: Json.TF,
           displayAnswer: false,
           
           
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
    checkAgainstAnswerFill(questionNumber, answer){
        const input = this.processInput(JSON.stringify(this.fill[questionNumber].input))
        
        if (input == answer){
            this.fill[questionNumber].correct = true
        } else {
            this.fill[questionNumber].correct = false
        }
    },
   
    validateJSON(){
    try { 
        
    this.checkAgainstAnswerFill(0, this.processInput(JSON.stringify(this.fill[0].answer)))
    this.checkAgainstAnswerFill(1, this.processInput(JSON.stringify(this.fill[1].answer)))
    this.checkAgainstAnswerFill(2, this.processInput(JSON.stringify(this.fill[2].answer)))
    this.checkAgainstAnswerFill(3, this.processInput(JSON.stringify(this.fill[3].answer)))
if (this.one.input == this.one.answer){
    this.one.correct = true
}else{
    this.one.correct = false
}
if (this.two.input == this.two.answer){
    this.two.correct = true
}else{
    this.two.correct = false
}
if (this.trueFalse.input == 1){
    this.trueFalse.correct = true
}else{
    this.trueFalse.correct = false
}
  this.displayAnswer =  true
    }catch(e) { alert(e); }
    
}
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

.idx{
    display: inline-block;

}
</style>