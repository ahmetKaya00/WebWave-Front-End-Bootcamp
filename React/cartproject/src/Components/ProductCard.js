import alertify from 'alertifyjs';
import React from 'react'
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap';

const ProductCard = ({product, onAddToCart}) => {
  const handleAddToCart = ()=>{
    onAddToCart(product);
    alertify.success(`${product.name} sepete eklendi.`);
  }

  return(
    <Card style={{margin: '10px'}}>
      <img src={product.image} alt={product.name} style={{width: '100%'}}/>
      <CardBody>
        <CardTitle>{product.name}</CardTitle>
        <CardText>{product.price}</CardText>
        <Button onClick={handleAddToCart}>Sepete Ekle</Button>
      </CardBody>
    </Card>
  );
}
export default ProductCard;