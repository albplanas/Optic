import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

class SideBar extends Component {
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
                     
                    <nav id="sidebar">
                        <div className="sidebar-header">
                        <p style={{marginLeft:"10px",fontSize:"30px",color:"white"}}><i  className="fas fa-bullseye"></i>PTIC</p>
                        </div>

                        <ul className="list-unstyled components">
                                    <p style={{marginLeft:"25px"}}>Menu</p>

                                    <li className={this.toggleClass("door1",this.props.door)} id="door1" onClick={()=>{return this.props.onSelectMenu("door1")}}>

                                        <a ><i style={{marginLeft:"25px",marginRight:"25px"}} className="fas fa-home"></i>Home </a>
                                    </li>

                                    <li id="door2" className={this.toggleClass("door2",this.props.door)} onClick={()=>{return this.props.onSelectMenu("door2")}}>
                                        <a ><i style={{marginLeft:"25px",marginRight:"25px"}}  className="fas fa-briefcase"></i>Dashboard</a>
                                    </li>

                                    <li id="door3" className={this.toggleClass("door3",this.props.door)} onClick={()=>{return this.props.onSelectMenu("door3")}}>
                                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i style={{marginLeft:"25px",marginRight:"25px"}}  className="fas fa-chalkboard"></i>Tutorials</a>
                                        <ul className="collapse list-unstyled" id="pageSubmenu">
                                            <li><a>Geometric Approach</a></li>
                                            <li><a >Wave Approach    </a></li>
                                            <li><a >More...          </a></li>
                                        </ul>
                                    </li>

                                    <li id="door4" className={this.toggleClass("door4",this.props.door)} onClick={()=>{return this.props.onSelectMenu("door4")}}>
                                            <a ><i style={{marginLeft:"25px",marginRight:"25px"}}  className="fas fa-user"></i>Profile</a>
                                    </li>

                                    <li id="door5" className={this.toggleClass("door5",this.props.door)} onClick={()=>{return this.props.onSelectMenu("door5")}}>
                                            <a><i style={{marginLeft:"25px",marginRight:"25px"}}  className="fas fa-user-friends"></i>Groups</a>
                                    </li>

                                    <li id="door6" className={this.toggleClass("door6",this.props.door)} onClick={()=>{return this.props.onSelectMenu("door6")}}>
                                            <a><i style={{marginLeft:"25px",marginRight:"25px"}}  className="fas fa-users"></i>Users</a>
                                    </li>
                        </ul>
                        <button style={{marginLeft:"30px"}} type="button" className="btn btn-info">
                        Download App 
                        <i style={{marginLeft:"25px"}} className="fas fa-download"></i>
                        
                    </button>
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
        onSelectMenu: (door) => dispatch({type: actionTypes.SELECTMENU , door:door})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);





