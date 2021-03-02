import React from "react";
import "./GridItem.css";
class GridItem extends React.Component{
    constructor(props){
        super();
       
        // this.handleClick=this.handleClick.bind(this);
    }
    
    render(){
        // console.log("this is",this.props.col,this.props.colIndex);
        return (
            <div className="grid-item" onClick={()=>{this.props.handlePlayerClick(this.props.rowIndex,this.props.colIndex)
            }} >{this.props.col}</div>
        );
    }
}
export default GridItem;