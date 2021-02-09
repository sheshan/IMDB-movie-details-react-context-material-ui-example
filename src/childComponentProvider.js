import React, {createContext, useReducer} from 'react';


const initialState = null;
const store = createContext(initialState);
const { Provider } = store

const StateProvider =({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type){
            case 'search':  
                return action.data
            default:
                throw new Error('unexpected action type');
        }
    },initialState)
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, StateProvider }
