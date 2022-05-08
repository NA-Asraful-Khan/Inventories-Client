import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart =(products)=>{

    const [cart, setCart]= useState([]);

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            } 
        }
        setCart(savedCart);
    },[products]);

    return [cart, setCart];
}

export default useCart;



// import { useEffect, useState } from "react"

// const useProducts = ()=>{
//     const [products, setProducts] = useState([]);

//     useEffect( () =>{
//         fetch('products.json')
//         .then(res=> res.json())
//         .then(data => setProducts(data))
//     }, []);

//     return [products, setProducts];
// }

// export default useProducts;




// import { useEffect, useState } from "react";

// const useServiceDetail = serviceId =>{
//     const [service, setService] = useState({});

//     useEffect( () =>{
//         const url = `https://enigmatic-headland-48112.herokuapp.com/service/${serviceId}`;
//         console.log(url);
//         fetch(url)
//         .then(res=> res.json())
//         .then(data => setService(data));

//     }, [serviceId]);
//     return [service]
// }

// export default useServiceDetail;