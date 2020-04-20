import Vue from 'vue'
import Vuex from 'vuex'


import { fetchSurveys, fetchSurvey, saveSurveyResponse, postNewSurvey } from '@/api'

Vue.use(Vuex)

const state = {
  // single source of data
  surveys: [],
  currentSurvey: {}
}


const actions = {

  //gets all surveys from api
  loadSurveys(context) {
    return fetchSurveys()
      .then((response) => context.commit('setSurveys', { surveys: response }))
  },
  
  //loads single survey
  loadSurvey(context, { id }) {
    return fetchSurvey(id)
      .then((response) => context.commit('setSurvey', { survey: response }))
  },

  //adds current survey
  submitNewSurvey(context, survey) {
    return postNewSurvey(survey)
  }
}

const mutations = {
  // isolated data mutations
  setSurveys(state, payload) {
    state.surveys = payload.surveys
  },

  //sets a single survey!
  setSurvey(state, payload) {
    const nQuestions = payload.survey.questions.length
    for (let i = 0; i < nQuestions; i++) {
      payload.survey.questions[i].choice = null
    }
    state.currentSurvey = payload.survey
  },



  setChoice(state, payload) {
    const { questionId, choice } = payload
    const nQuestions = state.currentSurvey.questions.length
    for (let i = 0; i < nQuestions; i++) {
      if (state.currentSurvey.questions[i].id === questionId) {
        state.currentSurvey.questions[i].choice = choice

      }
    }
  }

}



const store = new Vuex.Store({
  state,
  actions,
  mutations,
})

export default store