import React from 'react';

function FunctionClick (){
    const handleClick = () =>{
        alert("hello world");
    }
    return(
        <div>
            <button onClick= {handleClick}>click</button>
        </div>
    )
}
export default FunctionClick;