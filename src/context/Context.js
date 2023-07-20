import { createContext, useEffect, useReducer } from 'react'
import Reducer from './Reducer';


const INITIAL_STATE = {
    user: window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : null,
    // user: window.localStorage.getItem("user") !== undefined ? JSON.parse(window.localStorage.getItem("user")) : null,
    isFetching: false,
    error: false
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);


    useEffect(() => {
        window.localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (
        <Context.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}>
            {children}
        </Context.Provider>
    )
}