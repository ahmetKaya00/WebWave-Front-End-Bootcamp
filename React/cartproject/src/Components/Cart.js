import React from "react";
import alertify from "alertifyjs";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

const Cart = ({cartItems, onRemoveFromCart, onClearCart}) =>{
    const totalPrice = cartItems.reduce((total, item)=> total + item.price,0);

    const handleRemoveFromCart = (item) =>{
        onRemoveFromCart(item);
        alertify.error(`${item.name} sepetten çıkarıldı.`);
    }
    const handleClearCart = ()=>{
        onClearCart();
        alertify.error('Sepet boşaltıldı.');
    }

    return(
        <div>
            <h3>Sepet</h3>
            <ListGroup>
                {cartItems.map((item)=>(
                    <ListGroupItem key={item.id}>{item.name} - {item.price}
                    <Button color="danger" onClick={()=> handleRemoveFromCart(item)} style={{float:'right'}}>Kaldır</Button>
                    </ListGroupItem>
                ))}
            </ListGroup>
            <h4>Toplam: ${totalPrice}</h4>
            <Button color="primary" onClick={handleClearCart}>Sepeti Boşalt</Button>
        </div>
    );
}
export default Cart;
