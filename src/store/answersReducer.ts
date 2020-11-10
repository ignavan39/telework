import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action } from 'redux';
export interface AnswerState {
    answers: Array<Answer>,
    states: Set<string>,
    schools: Set<string>

}

type MyExtraArg = undefined;
type ThunkResult<R> = ThunkAction<R, AnswerState, MyExtraArg, Action>;
export type MyAction = { type: string, payload: AnswerState }
export type Answer = {
    timeAns: string,
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
        answers: new Array<Answer>(),
        states: new Set<string>(),
        schools: new Set<string>()
    })
}

export const fetchAnswers = (): ThunkResult<Promise<void>> => async (dispatch) => {
    const url = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:8080/api'
    const states = new Set<string>();
    const schools = new Set<string>();
    const rawResponse = await fetch(url)
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
    answers.map((item: Answer) => {
        states.add(item.state.trim());
        schools.add(item.school.trim());
    })
    dispatch({ type: FETCH_ANSWERS, payload: { answers, states, schools } })
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