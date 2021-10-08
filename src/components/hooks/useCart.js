import { useEffect } from "react";
import { useState } from "react"
import { getStoredCart } from "../../utilities/fakedb";

const useCart = product =>{
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        if(product.length){
            const saveCart = getStoredCart();
            const storeCart = [];
            for(const key in saveCart){
                const addProduct = product.find(product => product.key === key);
                if(addProduct){
                    const quantity = saveCart[key];
                    addProduct.quantity = quantity ;
                    storeCart.push(addProduct);
                }
            }
            setCart(storeCart)
        }
    },[product])
    return [cart, setCart]
}
export default useCart