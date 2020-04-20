<template>
<div>
    <v-app>
       <div>
        <div class="newQuestion">
          <div>
            <v-text-field class="text-field" outlined v-model="question" placeholder="Please enter your question" ></v-text-field>
             <v-text-field class="text-field" outlined v-model="answer" placeholder="Enter the correct answer" ></v-text-field>
          </div>
          
            <v-btn class="large" @click="addChoice">Add Option</v-btn>
            <p> One option needs to be the correct answer </p>
            <v-btn class="large" @click="saveQuestion"> Save Question</v-btn>
            <p> allows you to also add another </p>
        </div>


        <h2 class="large" v-show="choices.length > 0">Question Choices</h2>


    <v-card v-for="(choice, idx) in choices" v-bind:key="idx">
      <div class="choices">
        <v-text-field type="text" class="input is-large" v-model="choices[idx]" />
      </div>

      <div class="remove">
        <v-btn class="button is-large" @click.stop="removeChoice(choice)"> Remove this choice </v-btn>
      </div>
    </v-card>


  
       </div>
    </v-app>
    </div>
</template>

<script>
export default {
name: 'Create',
data(){
      return {
        question: '',
        answer: '',
        choices: [],
    }
  },
 
 
  methods: {
    removeChoice(choice) {
      const idx = this.choices.findIndex(c => c === choice)
      this.choices.splice(idx, 1)
    },
    saveQuestion() {
      //sends to parent component
      this.$emit('questionComplete', {
        question: this.question,
        answer: this.correctAnswer,
        choices: this.choices.filter(c => !!c)
      })
      this.question = ''
      this.answer = ''
      this.choices = []
    },
    addChoice() {
      this.choices.push('')
    },
  }
    
  }

</script>


<style scoped>

.v-card{
   margin-left: auto;
    margin-right: auto;
    width: 600px;
    padding: 10px 20px;
    margin-top: 20px;   
}

.text-field{
  width: 50%;
}
.v-select{
  margin-top: 25px;
}
.routerLink{
     text-decoration: none;
     margin: 25px;
     
}

/* TODO: Center question and answer input */
.newQuestion{
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    height: auto;
    padding: 10px 20px;
    margin-top: 20px;  
}
</style>