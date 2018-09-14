import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';




class Add_Element extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            input:''
          }
        this.onChange=this.onChange.bind(this);
        this.Add=this.Add.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value });

      }
    
    Add(){
          var arr=this.state.input.split('(') 
          var fn=arr[0].split(" ")[0].toLowerCase()

          var properties=arr[1].split(",")
          console.log(fn,"fns",properties)
          this.props.Add_function(fn,properties);

    }

    
    render() {
        var input=this.state.input;

      return (
        <div >

             
                    <div id="add_elem">
                        <div className="row">
                          <div style={{marginRight:"10px"}} className="col-sm-2">  <button type="button"  className="btn btn-primary" onClick={this.Add}><i className="fas fa-plus"></i></button></div>
                          
                          <div className="col-sm-9"> <input type="text" className="form-control" placeholder="mirror (x, y, R, m, l)s" name='input' value={input} onChange={this.onChange} /></div>
                        </div> 
                    </div>


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
Add_function: (fn,properties) => dispatch({type: actionTypes.ADDFUNCTION ,fn:fn, properties:properties, id:Date.now(),gen:0})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Add_Element);