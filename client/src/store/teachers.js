import Axios from 'axios'
import {action, observable,makeObservable } from 'mobx'
import env from '../env'

class Answers {

    answers = [];
    stateSet = {};

    schoolSet = {};

    loader = false
    constructor(){
        makeObservable(this,{
            answers:observable,
            stateSet:observable,
            schoolSet:observable,
            fetchAnswers:action
        })
    }
    async fetchAnswers() {
       const raw =  await Axios.get("http://localhost:8080/api")
       this.answers = raw.data;
       this.stateSet = new Set();
       this.schoolSet = new Set()

       this.answers.map((item) => {
           this.schoolSet.add(item.school.trim())
           this.stateSet.add(item.state.trim())
       })
    }


}

export default new Answers()