import React from "react";

function MessageComponent(props){
    return(
        <div>
            <h2>Gelen Mesaj</h2>
            <p>{props.message}</p>
        </div>
    );
}

MessageComponent.defaultProps = {
    message: "Varsayılan Mesaj: Henüz bir mesaj gönderilmedi."
};
export default MessageComponent;