import React from "react";
import Maching from "./Machine";
import NotMaching  from './NotMaching';


const SlotM = (props) =>{
    // let x = '😄';
    // let y = '😄';
    // let z = '🤣';
    
    // let x = props.x;
    // let y = props.y; 
    // let z = props.z;

    // object destructing
    let {x, y, z} = props;
    
    if (x===y && y===z) {
        
      return <Maching x={x} y={y} z={z} />
    }
    else {
     return<NotMaching x={x} y={y} z={z} />
    }
  }

  export default SlotM;


