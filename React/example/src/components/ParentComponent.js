import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent(){
    return(
        <div>
            <h1>Bu bir Parent Bileşendir.</h1>

            <ChildComponent name ="Ahmet" age={25}/>
            <ChildComponent name ="Ali" age={35}/>

        </div>
    );
}

export default ParentComponent;