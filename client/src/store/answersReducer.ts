import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action } from 'redux';
interface AnswerState {
    answers: [],
    states: Set<string>,
    schools: Set<string>

}

type MyExtraArg = undefined;
type ThunkResult<R> = ThunkAction<R, AnswerState, MyExtraArg, Action>;

export type MyAction = { type: string, payload: AnswerState }
type answer = {
    timeAns: string
    state: string,
    school: string,
    name: string,
    platform: string,
    platformStable: string,
    ready: string,
    timeToTraining: string,
    timeOnTelephone: string
}
export const FETCH_ANSWERS = "ANSWERS/FETCH_ANSWERS";


const initialState = () => {
    return ({
        answers: [],
        states: new Set<string>(),
        schools: new Set<string>()
    })
}




export const fetchAnswers = (): ThunkResult<Promise<void>> => async (dispatch) => {
    const states = new Set<string>();
    const schools = new Set<string>();
    console.log('asdasd')
    const rawResponse = await fetch('http://localhost:8080/api')
        .then(response => {
            if (response.ok) {
                console.log(response)
                return response.json()
            }
            console.log(response)
        }).catch(err => {
            console.error(err);
        })
    const answers = rawResponse;
    answers.map((item:answer) => {
        states.add(item.state.trim());
        schools.add(item.school.trim());
    })
    dispatch({ type: FETCH_ANSWERS, payload: {answers,states,schools}})
}

export const answersReducer = (state = initialState(), action: MyAction) => {
    switch (action.type) {
        case FETCH_ANSWERS: {
            return {
                ...state,
                answers: [...action.payload.answers],
                states: action.payload.states,
                schools: action.payload.schools
            }
        }
        default:
            return state
    }
}