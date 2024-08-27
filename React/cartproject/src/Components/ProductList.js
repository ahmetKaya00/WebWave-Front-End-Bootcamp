import React from "react";
import ProductCard from './ProductCard';
import { Row, Col } from "reactstrap";

const ProductList = ({products, onAddToCart}) =>{
    return(
        <Row>
            {products.map((product)=>(
                <Col sm="4" key={product.id}>
                    <ProductCard product={product} onAddToCart={onAddToCart}/>
                </Col>
            ))}
        </Row>
    );
}
export default ProductList;