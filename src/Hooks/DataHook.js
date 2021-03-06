import { useEffect, useState } from "react";

const useInventory = () => {

    const [items, setItem] = useState([]);
    
    useEffect(() => {
        fetch(`https://enigmatic-headland-48112.herokuapp.com/product`)
            .then(response => response.json())
            .then(data => setItem(data));
    }, []);

    return [items, setItem];
}

export default useInventory;