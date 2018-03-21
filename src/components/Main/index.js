import React, { Component } from 'react';
import { connect } from 'react-redux';
import  ProgressBar  from '../ProgressBar';
import {firstQues,next,back} from '../../action';

class Main extends Component {

componentWillMount(){
  this.props.firstQues();
}

next = () => {
  this.props.next();
}

back = () => {
  this.props.back();
}
  render () {
    return (
      <div>
        <ProgressBar />
        {
          this.props.survey.map((s,id) => 
          <div key={id}>
            <p>{s.ques}</p>
            <input type='text'/>
          </div>
          )}
        <button onClick={this.back}>Back</button>
        <button onClick={this.next}>Next</button>
      </div>
    )
  }
}  

function mapStateToprpos(state) {
  return {
    survey:state.survey
  };
}

function mapDispatchToProps(dispatch) {
  return {
    firstQues:()=>dispatch(firstQues()),
    next:()=>dispatch(next()),
    back:()=>dispatch(back()),
  };
}

export default connect(mapStateToprpos, mapDispatchToProps)(Main);