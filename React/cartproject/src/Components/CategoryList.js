import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


const CategoryList = ({categories, onSelectedCategory}) => {
    if (!categories) return null;

    return(
        <ListGroup>
            {categories.map((category)=>(
                <ListGroupItem key={category.id} onClick={()=>onSelectedCategory(category)}>
                    {category.name}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
}
export default CategoryList;