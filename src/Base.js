import React from'react';


export default (props) =>{
    const style = {
        left: `${props.basePos[0]}%`,
        top: `${props.basePos[1]}%`,
      }
      return (
        <div className="base-shape" style={style}></div>
      )
}