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
                history: [...state.history, payload.data.name]
            }
        }        
        default: {
            return state;
        }
    }
}