import React from 'react'
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

function ProductItem({product, addToCart}){

    return(
        <Card>
            <CardImg top width="100%" src={product.image} alt={product.title}></CardImg>
            <CardBody className='d-flex flex-column'>
                <CardTitle tag="h5">{product.title}</CardTitle>
                <CardText>${product.price.toFixed(2)}</CardText>
                <Button onClick={()=>addToCart(product)} color='primary' className='mt-auto'>Add to Cart</Button>
            </CardBody>
        </Card>
    );
};
export default ProductItem;