import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import d3 from "d3";
const { Calculate_interaction} = require('../../math/calculus');
window.d3 = d3;

const functionPlot = require("function-plot");



class Graphic extends Component {

    render() {

      console.log("test15",this.props.src)
     var  src=this.props.src
     var  dvc=this.props.devices;
     var  container=[];
     Calculate_interaction(src,dvc,container);
     console.log("package",container)
      
     var m=5;
     var n=2;
     var linear_fn=m.toString()+'*x+2';
  var funct=    [
        { fn: linear_fn, color: 'pink', range: [2,1000] },
        { fn: 'x * x+5*x+6' }
      ]

      var parameters={
        target: document.querySelector("#graphic"),
        width:1200,
        height:800,
        xAxis: {domain: [-3, 8]},
        tip: {
          renderer: function () { }
        },
        grid: true,
        data:funct
      }

      functionPlot(parameters);
      return (
        <div>
    
          <h1 id="graph_title">Hello</h1>
         
           <div id="graphic"/>
           
      </div>
      );
    }
  }





const mapStateToProps = state => {
  return {
      door: state.door,
      src:state.sources,
      devices:state.devices
  };
};

const mapDispatchToProps = dispatch => {
  return {
Add_function: (fn,properties) => dispatch({type: actionTypes.ADDFUNCTION ,fn:fn, properties:properties, id:Date.now()})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Graphic);