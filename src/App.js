import React, { Component } from 'react';
import Base from './Base';
import Shape from './Shape';

const initialState={
  basePos:[45,45],
  shapePos:[45,10],
  gameSpeed:50,
  shapeSpeed:1,
  match:false,
  score:0
}

class App extends Component {

  state=initialState

  componentDidMount(){
    setInterval(this.fallShape,this.state.gameSpeed);
    document.onkeydown = this.onKeyDown;
    
  }

  componentDidUpdate(){
    this.checkOutOfBorder();
    this.checkMatch();
    /* console.log(this.state.shapePos); */
  }

  
  onKeyDown=(e)=>{
    e = e || window.event;
    switch(e.keyCode){
      case 13:
        if(this.state.shapePos[1]>=45 && (this.state.shapePos[1]<=50)){
        this.setState({match:true});
        console.log(this.state.match);
        }
        break;
    }
  }

  checkMatch=()=>{
      if((this.state.shapePos[1]>=45 && this.state.shapePos[1]<=50) &&(this.state.match===true)){

          this.setState({
            shapePos:[45,10],
            score:this.state.score+1,
            match:false
          })
          
          this.increaseShapeSpeed();
        }
      }

  fallShape = ()=>{
    let shapeY = this.state.shapePos[1];
    shapeY = shapeY+this.state.shapeSpeed;

    this.setState({
      shapePos:[45,shapeY]
    })
  }

  increaseShapeSpeed=()=>{
    let speed = this.state.shapeSpeed;
    speed = speed+1;

    this.setState({
      shapeSpeed:speed
    })
  }

  checkOutOfBorder(){
    let sPos= this.state.shapePos[1];
    if(sPos>=91 ){
      this.setState({
        shapePos:[
          45,10
        ]
      })
    }
  }

  render() {
    return (
     <div className="game-area" style={{backgroundColor:'#336699'}}>
      
      <text className="text-score"> Score : {this.state.score}</text>
    
      <Base basePos={this.state.basePos}/>
     
      <Shape shapePos={this.state.shapePos}/>
      

      </div>  
    
    );
  }
}

export default App;
