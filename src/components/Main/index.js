import React, { Component } from 'react';
import { connect } from 'react-redux';
import  ProgressBar  from '../ProgressBar';
import {firstQues,next,back} from '../../action';

class Main extends Component {

state = {
  answer:'',
  ques:''
};

componentWillMount(){
  this.props.firstQues();
}

componentWillReceiveProps(props){
  if(props.survey[0]==null||undefined){
    return null
  }else{
    this.setState({
      ques: Object.values(props.survey[0])
    });
  }
}

next = () => {
  const {answer,ques} =this.state;
  if(answer===''){
    alert('Can Not Blank')
  }else{
    this.props.next(...ques,answer);
    this.setState({
      answer: ''
    });
  }
}

back = () => {
  this.props.back();
}

change = event => {
  this.setState({
    [`${event.target.name}`]: event.target.value
  });
};

  render () {
    const { answer } = this.state;
    const { survey, result } = this.props;
    return (
      <div>
        {!survey
          ? null
          :<div>
            <ProgressBar />
          {
          survey.map((s,id) => 
          <div key={id}>
            <p>{s.ques}</p>
            <input 
              type="text" 
              name="answer" 
              placeholder="answer" 
              value={answer}  
              onChange={this.change}/>
          </div>
          )}
        <button onClick={this.back}>Back</button>
        <button onClick={this.next}>Next</button>
        </div>
         }
      </div>
    )
  }
}  

function mapStateToprpos(state) {
  return {
    survey:state.survey,
    result:state.result    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    firstQues:()=>dispatch(firstQues()),
    next:(ques,answer)=>dispatch(next(ques,answer)),
    back:()=>dispatch(back()),
  };
}

export default connect(mapStateToprpos, mapDispatchToProps)(Main);