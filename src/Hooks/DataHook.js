import { useEffect, useState } from "react";

const useInventory = () => {

    const [items, setItem] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/product`)
            .then(response => response.json())
            .then(data => setItem(data));
    }, []);

    return [items, setItem];
}

export default useInventory;