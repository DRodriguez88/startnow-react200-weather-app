import _ from 'lodash';

const defaultState = {
    single: {},
    history: []
}

export default function historyReducer( state = defaultState, action ) {
    const { type, payload } = action;

    switch(type) {
        case 'GET_WEATHER_FULFILLED': {
            return {
                ...state,
                single: payload.data,
                history: _.uniq([...state.history, payload.data.name])
            }
        }        
        default: {
            return state;
        }
    }
}