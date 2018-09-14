import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import Top_Bar from "./Top_Bar";
import SideBar from "./Side_Bar";
import Header from "./Header";
import Tutorial from "./Tutorial";
import Dashboard from "./Dashboard";


class Home extends Component {

    render() {
      var show_home=this.props.door==="door1"?{display:"block"}:{display:"none"}
      var show_dashboard=this.props.door==="door2"?{display:"block"}:{display:"none"}
      return (
        <div id="Home">
                    <div className="wrapper">
                              
                                
                                <SideBar/>
                                
                                <div id="content">

                                        <Top_Bar/>

                                        <div id="home_seccion" style={show_home}>
                                                <Header/>
                                                <Tutorial/>
                                        </div> 
                                        <div id="dashboard_seccion" style={show_dashboard}>
                                                <Dashboard/>
                                        </div> 
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

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

