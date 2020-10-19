//import Axios from "axios";

//class Teachers extends VuexModule
//import {stringify} from "querystring";

export default {
    actions: {
        async fetchTeachers(){
            await fetch('http://localhost:3000/api', {
                method : "GET",
            }).then(response => console.log(response));
        }
    }
}