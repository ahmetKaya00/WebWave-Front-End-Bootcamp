import React from 'react'
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import './ProductItem.css';

function ProductItem({product, addToCart}){

    return(
        <Card className='product-card'>
            <CardImg top width="100%" src={product.image} alt={product.title} className='product-img'></CardImg>
            <CardBody className='d-flex flex-column'>
                <CardTitle tag="h5" className="product-title">{product.title}</CardTitle>
                <CardText className="product-text">${product.price.toFixed(2)}</CardText>
                <Button onClick={()=>addToCart(product)} color='primary' className='mt-auto'>Add to Cart</Button>
            </CardBody>
        </Card>
    );
};
export default ProductItem;