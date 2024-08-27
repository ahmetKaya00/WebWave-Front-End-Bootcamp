import React from "react";

function ChildComponent(props){
    return(
        <div>
            <h2>Bu Child Bileşen.</h2>
            <p>İsim: {props.name}</p>
            <p>Yaş: {props.age}</p>
        </div>
    );
}
export default ChildComponent;