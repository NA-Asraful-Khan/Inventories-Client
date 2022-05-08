import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useMyItem = () => {
    const [user]= useAuthState(auth);

    const [myItem, setMyItem] = useState([]);
    
    useEffect(() => {
        const email = user.email;
        fetch(`http://localhost:5000/myProducts?email=${email}`)
            .then(response => response.json())
            .then(data => setMyItem(data));
    }, [user]);

    return [myItem, setMyItem];
}

export default useMyItem;