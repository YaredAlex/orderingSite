import {  createContext, useReducer } from "react"



export const ItemsContext = createContext();
const reducer =(state,action)=>{
    switch(action.type){
               case "SET_ITEMS":
                return{
                      ...state,
                      items: action.payload
                }
                default:
                    return{
                        state
                    }
    }
}

const INITIAL_STATE = {
    items: [],
}

export const ItemsContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,INITIAL_STATE);
    
    return(
        <ItemsContext.Provider value={{items:state.items,dispatch}}>
            {children}
        </ItemsContext.Provider>
    )
}