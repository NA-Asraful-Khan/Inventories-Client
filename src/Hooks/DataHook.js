import { useEffect, useState } from "react";

const useInventory = () => {

    const [items, setItem] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setItem(data));
    }, []);

    return [items, setItem];
}

export default useInventory;