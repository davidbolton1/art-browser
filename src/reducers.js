import { SEARCH, SELECT } from "./actions";

const defaultState = {
    query: '',
    results: []
}
export function art(state=defaultState, action) {
    switch(action.type) {
        case SEARCH:
            return {
                ...state,
                query: action.payload.query,
                results: action.payload.results
            }
            break;
        case SELECT:
            return {
                ...state,
            }
        default:
            break;
    }
}