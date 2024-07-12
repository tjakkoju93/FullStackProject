// to access data frfom user storning data into database and store data in local storage
import { useState } from "react";
import { UseAuthContext } from "./UseAuthContext";


export const UseSignup = () => {
    const [error, setError] = useState(null);
    const { dispatch } = UseAuthContext();
    //handles post request
    const signuphook = async (email, password) => {
        setError(null);

        //provide method header and body 
        const response = await fetch("http://localhost:5300/api/users/signup",
            {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ email, password })

            }


        );
        console.log(response);
        const data = await response.json();
        if (!response.ok) {
            setError(data.response)
        }
        if (response.ok) {
            //saving data in local storage
            localStorage.setItem("user", JSON.stringify(data))

            //dispatch update user context
            dispatch({ type: 'LOGIN', payload: data })

        }

    }
    return { signuphook, error };
}
