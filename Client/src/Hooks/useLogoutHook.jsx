import { UseAuthContext } from "./UseAuthContext";


export const UseLogout = () => {
    const {dispatch} = UseAuthContext();

    const logout = () => {
        //remove data from local storage
        localStorage.removeItem("user")

        //update context 
        dispatch({
            type: "LOGOUT"
        })
    }

    return {logout}
}