import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';


class ProgressBar extends Component {

  state = {
  className:'initial'
  };


  componentWillReceiveProps(nextProps){
    const {bar} = nextProps;
    this.setState({
      className: bar
    });
  }
  
  render () {
    const { className }=this.state
    return (
      <div>
        <div className={className}></div>
      </div>
    )
  }
}  

function mapStateToprpos(state) {
  return {
    bar:state.bar
  };
}



export default connect(mapStateToprpos, undefined)(ProgressBar);