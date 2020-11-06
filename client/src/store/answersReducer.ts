
interface AnswerState{
    answers : [],
    states: Set<string>,
    schools: Set<string>

}


const initialState = () => {
    return({
       answers: [],
       states: new Set<string>(),
       schools: new Set<string>() 
    })
}

export type Action = {type:string,payload:AnswerState}

export const FETCH_ANSWERS = "FETCH_ANSWERS";

export const answersReducer = (state = initialState(),action:Action) => {
    switch(action.type){
        case FETCH_ANSWERS: {
            return {
                ...state,
                answers:[...action.payload.answers],
                states:action.payload.states,
                schools:action.payload.schools
            }
        }
        default:
            return state
    }
}