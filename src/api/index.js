

var surveys = [{
    id: 1,
    name: 'Trivia',
    questions: [
        {
            id: 1,
            question: 'What is the worlds most profitable company (Net Profits)?',
            choices: [
                'Google',
                'Apple',
                'Microsoft']
        }, {
            id: 2,
            question: 'What foot did Neil Armstrong first set on the moon? ',
            choices: [
                'Left',
                'Right',]
        }]
}, {
    id: 2,
    name: 'Math',
    questions: [
        {
            id: 5,
            question: 'What is 1+1?',
            choices: [
                '2',
                '5',
                '-10']
        }, {
            id: 6,
            question: 'What is 50/50?',
            choices: [
                '0',
                '1',
                '50']
        }]
}]

export function fetchSurveys() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(surveys)
        }, 300)
    })
}

export function fetchSurvey(surveyId) {
    return new Promise((resolve, reject) => {
        console.log(surveyId)
        setTimeout(() => {
            
            const survey = surveys.find(survey => survey.id === surveyId)
            if (survey) {
                resolve(survey)
            } else {
                reject(Error('Survey does not exist'))
            }
        }, 300)
    })
}

export function saveSurveyResponse(surveyResponse) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("saving survey response...")
            
        })
        resolve()
    }, 300)
}

export function postNewSurvey(survey) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Saving survey ...', survey)
            //saves to survey array!!!!!
            surveys.push(survey)
            resolve()
        }, 300)
    })
}