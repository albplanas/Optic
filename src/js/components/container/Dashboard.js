import React, { Component } from "react";
import Graphic from "./Graphic";
import Calculator from "./Calculator";



class Dashborad extends Component {

    render() {
        var x="uuuuu"
      return (
        <div className="wrapper_r">

               <div id="content_r">
                  <Graphic />
                </div>

                <Calculator />

       </div>

      );
    }
  }





  export default Dashborad;  
  





