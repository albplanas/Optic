import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import Add_Element from "./Add_Element";
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
    }
    toggleClass(a,b) {
       return a===b?"active":""
    };
    
    render() {
           console.log(this.props.door)
      return (
        <div >
                                                   
              <nav id="sidebar_r">
                      <button type="button" id="CalcCollapse" className="btn btn-info"><i className="fa fa-cog fa-spin"></i></button>
   
                      <div className="sidebar-header"><h3>Set Up</h3></div>

                    <Add_Element/>

                    <div id="edite_elem">
                        <div className="row">
                                    <div style={{marginRight:"10px"}} className="col-sm-2">  <button type="button"  className="btn btn-success"><i className="fas fa-edit"></i></button></div>
                                    
                                    <div className="col-sm-8 "> <div className="edite"> <p>mirror (x, y, R, m, l)</p> </div> </div> 

                                   <div className="form-check col-sm-1"> <input style={{marginTop:"13px"}}className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/></div>
                               </div>
                         </div>


                </nav>

        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
        door: state.door,
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);