import React from "react";
import "./Footer.css";
class Footer extends React.Component{
    constructor(props)
    {
        super(props);
        
    }
    render(){
    
        // console.log("this props",this.props);
        if(this.props.drawStatus==true)
        {
                 return (
                <>
                  <div className="turn" >Oops! Match Draw</div>
                  <button className="reset" onClick={()=>{this.props.resetGame()}}>Reset</button>
                  </>

        )
        }
        else
        {
             if(this.props.gameStatus==true){
                 
        return (
                <>
                  <div className="turn" >Player {this.props.turn}'s turn</div>
                  <button className="reset" onClick={()=>{this.props.resetGame()}}>Reset</button>
                  </>

        )
        }
        else
        {
           return (
               <>
                  <div className="turn" >Player {this.props.turn} Won</div>
                    <button className="reset" onClick={()=>{this.props.resetGame()}}>Reset</button>
                    </>
        )
        }
        }
       
          
        
            
            
        
    }
}
export default Footer;





// let x = {
//     name: "abc",
//     hello : () => {
//       var name = "new word 1";
//       console.log(
// this.name
// )},
//     anon : function() {
//       var name = "new word 2";
//     console.log(
// this.name
// );
//     }