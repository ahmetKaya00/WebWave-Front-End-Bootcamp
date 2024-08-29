import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../context/CartContext';
import alertify from 'alertifyjs';

function ProductDetail(){
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    const {addToCart} = React.useContext(CartContext);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data));
    }, [id]);

    if(!product) return <div>Loading...</div>

    return(
        <div>
            <h1>{product.title}</h1>
            <p>${product.price}</p>
            <p>${product.description}</p>
            <button onClick={()=>{
                addToCart(product);
                alertify.success(`${product.title} added to cart!`);
            }}></button>
        </div>
    );
}

export default ProductDetail;