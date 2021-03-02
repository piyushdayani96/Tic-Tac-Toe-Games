import React from "react";
import "./GridRow.css";
import GridItem from "../GridItem";
class GridRow extends React.Component{
    constructor(props){
        super();
    }
    render(){
        //  let GridRow =[<GridItem/>,<GridItem/>,<GridItem/>];
        // console.log("My index is ",this.props.rowIndex);
        return (
           <div className="grid-row">
               {this.props.row.map((col,colIndex)=>(
            <GridItem rowIndex={this.props.rowIndex} colIndex={colIndex} 
            col = {col}
            handlePlayerClick={this.props.handlePlayerClick}
            />
           ))}
           </div>
        )
    }
}
export default GridRow;