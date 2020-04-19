<template>
<v-app>
<div id = 'Survey'>
  <Nav/>



{{survey}}

          <div class="columns">
          <div class="column is-10 is-offset-1">

            <!-- <div
              v-for="(question, idx) in survey.questions" 
              v-bind:key="question.id"
              v-show="currentQuestion === idx"> 

                
                    <h4 class='title has-text-centered'>{{ question.text }}</h4>
              
                  <div class="column is-offset-4 is-4">
                    <div class="control">
                     
                   
                      <div v-for="choice in question.choices" v-bind:key="choice.id">
                        <label class="radio">
                        <input type="radio" v-model="selectedChoice" :value="choice.id">
                        {{ choice.text }}
                        </label>
                      </div>


                    </div>


                  </div>

            </div> -->

      

              <v-btn v-if="surveyComplete" class='button is-focused is-primary is-large'
                @click.stop="handleSubmit">
                Submit
         </v-btn>
          </div>
        </div>
                    <h2 class="title">{{ survey.name }}</h2>
     
</div>
</v-app>
</template>

<script>
import {fetchSurvey} from '@/api'
import Nav from '@/components/Nav.vue'
export default {
  name: 'Survey',
  components:{
    Nav
},
  data() {
    return {
       currentQuestion: 0 ,
       
       // new data prop
    }
  },
  beforeMount() {
    this.$store.dispatch('loadSurvey', { id: parseInt(this.$route.params.id) })
    
    
    console.log(this.$route.params.id)

    
     fetchSurvey(parseInt(this.$route.params.id))
      .then((response) => {
        this.survey = response
      })
  },
    methods: { // new Vue obj member
    goToNextQuestion() {
      if (this.currentQuestion === this.survey.questions.length - 1) {
        this.currentQuestion = 0
      } else {
        this.currentQuestion++
      }
    },
    goToPreviousQuestion() {
      if (this.currentQuestion === 0) {
        this.currentQuestion = this.survey.questions.lenth - 1
      } else {
        this.currentQuestion--
      }
    },
     handleSubmit() {
      this.$store.dispatch('addSurveyResponse')
        .then(() => this.$router.push('/'))
    }
  },
  computed: {  // new Vue obj member
    surveyComplete() {
      if (this.survey.questions) {
        const numQuestions = this.survey.questions.length
        const numCompleted = this.survey.questions.filter(q => q.choice).length
        return numQuestions === numCompleted
      }
      return false
    },
    survey() {
      return this.$store.state.currentSurvey
    },

    //The answer to this is to use a slightly more advanced version 
    //of a computed property that contains a defined pair of get and set methods within it.
    // This provides v-model a mechanism for utilizing 2-way data binding between the UI and 
    //the component's Vue object. In this way the computed property is explicitly in control of
    // the interactions with the store's data.

    //selectedChoice is actually an object property instead of a function like the others. 
    selectedChoice: {
      get() {
        const question = this.survey.questions[this.currentQuestion]
        return question.choice
      },
      //The set(value) portion receives the new value that is fed from v-model's 2-way data binding and commits a store mutation called setChoice
      set(value) {
        const question = this.survey.questions[this.currentQuestion]
        this.$store.commit('setChoice', { questionId: question.id, choice: value })
      }
    }
  }
}
</script>

<style>

</style>