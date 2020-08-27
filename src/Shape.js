import React from'react';

export default (props) =>{
    const style = {
        left: `${props.shapePos[0]}%`,
        top: `${props.shapePos[1]}%`,
         
      }

      return (
        <div className="falling-shape" style={style}></div>
      )
}