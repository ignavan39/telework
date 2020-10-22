import Axios from 'axios'
import {action, observable,makeObservable, computed } from 'mobx'
import env from '../env'

class Answers {

    answers = [];
    stateSet = [];

    schoolSet = [];

    loader = false
    constructor(){
        makeObservable(this,{
            answers:observable,
            stateSet:observable,
            schoolSet:observable,
            fetchAnswers:action,
        })
    }

    async fetchAnswers() {
       const raw =  await Axios.get("http://localhost:8080/api")
       this.answers = raw.data;
       let stateSet = new Set();
       let schoolSet = new Set()

       this.answers.map((item) => {
           schoolSet.add(item.school.trim())
           stateSet.add(item.state.trim())
       })

       this.schoolSet = [...schoolSet.keys()]
       this.stateSet = [...stateSet.keys()]
    }


}

export default new Answers()