// to access data frfom user storning data into database and store data in local storage
import { useState } from "react";
import { useAuthContext } from "./useAutContext";


export const useLoginHook = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();
    //handles post request
    const loginHook = async (email, password) => {
        setError(null);

        //provide method header and body 
        const response = await fetch("http://localhost:5300/api/users/login",
            {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ email, password })

            }


        );
        console.log(response);
        const data = await response.json();
        console.log(data)
        if (!response.ok) {
            setError(data.response)
        }
        if (response.ok) {
            //saving data in local storage
            localStorage.setItem("user", JSON.stringify(data))

            //dispatch update user context
            dispatch({type: 'LOGIN', payload: data} )


        }

    }
    return { loginHook, error };
}
