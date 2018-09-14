import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

class TopBar extends Component {
    render() {

     var show_logout=this.props.login?{visibility:"visible"}:{visibility:"hidden"};
     var show_login=this.props.login?{visibility:"hidden"}:{visibility:"visible"};

      console.log(this.props.open_menu)


      return (
        <div id="Top_bar">
              <div className="row">
                          <div className="col-xs-6">
                              <button  type="button" id="sidebarCollapse" className="btn btn-info" onClick={this.props.OpenMenu}>
                                          
                              <i className="fas fa-bars"></i>
                                               
                              </button>            
                           </div>
                           <div className="col-xs-2">
                                 <p id="Title"><i  style={{color:"#034f84"}}className="fas fa-bullseye"></i>PTIC</p>

                          </div>
                          
                          <div id="login" style={show_login}>Login</div>  
                          <div id="register" style={show_login}>Register</div>  
                          <div id="logout" style={show_logout}>Logout</div> 
              </div>
               
              
        </div>




      );
    }
  }




  const mapStateToProps = state => {
    return {
        open_menu: state.open_menu,
        login: state.login
    };
};

const mapDispatchToProps = dispatch => {
    return {
        OpenMenu: () => dispatch({type: actionTypes.MAINMENU})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
