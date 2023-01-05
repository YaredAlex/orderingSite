import { useReducer } from "react";
import React from "react";
import { useCookies } from "react-cookie";
const INITIAL_STATE ={
    currentUser: {
    },
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
    const [cookie,setCookie] = useCookies();
   INITIAL_STATE.currentUser= {email:cookie.name||null}
  const [state,dispatch] = useReducer(reducer,INITIAL_STATE);
   return(
      <UserContext.Provider value={{currentUser:state.currentUser,dispatch}}>
        {children}
      </UserContext.Provider>

   )

}

