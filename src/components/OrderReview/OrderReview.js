import React from 'react';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProduct from '../hooks/Useproduct';
import Review from '../Review/Review';

const OrderReview = () => {
    const [product, setProduct] = useProduct();
    const [cart, setCart] = useCart(product)
    const handleremove = key =>{
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart)
        removeFromDb(key)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <Review 
                        key = {product.key}
                        product = {product}
                        handleremove ={handleremove}
                        >
                        </Review>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>     
        </div>
    );
};

export default OrderReview;