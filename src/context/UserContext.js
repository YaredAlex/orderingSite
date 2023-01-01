import { useReducer } from "react";
import React from "react";
const INITIAL_STATE ={
    currentUser: JSON.parse(localStorage.getItem('user'))||null,
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {
                currentUser:action.payload,
            };
        default:
            return state;
            
    }
}
export const UserContext = React.createContext(INITIAL_STATE);

export const UserContextProvider = ({children}) =>{
  const [state,dispatch] = useReducer(reducer,INITIAL_STATE);
   return(
      <UserContext.Provider value={{currentUser:state.currentUser,dispatch}}>
        {children}
      </UserContext.Provider>

   )

}

