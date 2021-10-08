import React from 'react';

const Review = (props) => {
    const {name, price , quantity, img, key} = props.product;
    const {handleremove} = props
    return (
        <div className="product">
            <div>
                <img src = {img} alt='' />
            </div>

            <div>
            <h3 className="product-name">Name : {name}</h3>
            <h4>Price : {price} </h4>
            <h5>quantity : {quantity} </h5>
            <button onClick={()=>handleremove(key)} className="btn-regular">Remove</button>
            </div>
            
        </div>
    );
};

export default Review;