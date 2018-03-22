import React, { Component } from 'react';
import { connect } from 'react-redux';
import  ProgressBar  from '../ProgressBar';
import {firstQues,next,back} from '../../action';

class Main extends Component {

state = {
  answer:'',
  ques:'',
  button:false
};

componentWillMount(){
  this.props.firstQues();
}

componentWillReceiveProps(props){
  const {survey,preview} = props;
  var statement = preview[0]
  if(statement){
    for(let i =0;i <= statement.length; i++){
      var newStatement=statement[i]
      for(let x in newStatement){
        var finalStatement = newStatement[x];
      }
    }
  }
  if(survey[0]==null||undefined){
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
      answer: '',
      button:false
    });
  }
}

back = () => {
  this.props.back();
}

change = event => {
  const {button} = this.state;
  this.setState({
    [`${event.target.name}`]: event.target.value
  });
  if(event.target.value && event.target.value.length > 0){
    this.setState({
      button:true
    });
  }else{
    this.setState({
      button:false
    });
  }
};

  render () {
    const { answer, button } = this.state;
    const { survey } = this.props;
    return (
      <div className='quesStyle'>
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
              className='inputField'
              name="answer" 
              placeholder="answer" 
              value={answer}  
              onChange={this.change}/>
            <div>
              <button onClick={this.back}>Back</button>
              {button && <button onClick={this.next}>Next</button>}
            </div>  
          </div>
          )}
        </div>
         }
         
      </div>
    )
  }
}  

function mapStateToprpos(state) {
  return {
    survey:state.survey,
    preview:state.preview    
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