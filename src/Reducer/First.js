import { FETCH_POST, NEW_POST } from '../Actions/Types';

let initialState = {
    items: [],
    itme: {}
}

/** Set state here **/ 
export default (state = initialState, action)=>{
    switch(action.type){
        case FETCH_POST : 
        console.log('Reducer called: ', state, action.body);
                return {
                    ...state,
                    items: action.body
                }
            break;
        case NEW_POST :
            break;
        default:
            return state    
    }
}