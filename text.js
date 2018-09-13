import React from 'react';



const Text = (props) => {
    console.log(props.name);
    return (
      <ol>
          {props.list.map((x,index) => <li key={x+index} > <button onClick={() => props.print(x)}> {x}</button></li>)}
      </ol>
    )
}

export default Text; 