import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from "./Home"

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../../../store/reducer';
const store = createStore(reducer);

class App extends Component {

  render() {
    return (
      <Home/>
    );
  }
}

export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Provider store={store}><App /></Provider>, wrapper) : false;