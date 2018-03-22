import React, { Component } from 'react';
import { connect } from 'react-redux';
import {preview} from '../../action';


class Preview extends Component {

  preview = () => {
    this.props.preview();
  }

  render () {
    if (!this.props.result) {
      return null;
    }    
    return (
      <div className='previewButton'>
        <button className='button' onClick={this.preview}>Preview Survey</button>
      </div>
    )
  }
}  

function mapStateToprpos(state) {
  return {
    result:state.result.show
  };
}

function mapDispatchToProps(dispatch) {
  return {
    preview:()=>dispatch(preview())
  };
}


export default connect(mapStateToprpos, mapDispatchToProps)(Preview);