import React, { Component } from 'react';
import { connect } from 'react-redux';
import  ProgressBar  from '../ProgressBar';
import {firstQues,next,back} from '../../action';

class Main extends Component {

state = {
  answer:'',
  ques:'',
  button:false,
  print:'',
  className:'quesStyle'
};


componentWillMount(){
  if(localStorage.result){
    var itemArray = JSON.parse(localStorage.result);
    var finalStatement = []
    if(itemArray){
      for(let i =0;i <= itemArray.length; i++){
        var newStatement=itemArray[i]
        if(newStatement===undefined){
          return null
        }else{
          finalStatement.push(newStatement)
          this.setState({
                print:finalStatement,
                className:'quesStyle2'
              })
        }
      }
    }
  }
  else{
    this.props.firstQues();
  }
}
componentWillReceiveProps(props){
  const {survey,preview} = props;
  var statement = preview[0]
  var finalStatement = []
  if(statement){
    for(let i =0;i <= statement.length; i++){
      var newStatement=statement[i]
      if(newStatement===undefined){
        return null
      }else{
        finalStatement.push(newStatement)
        this.setState({
              print:finalStatement,
              className:'quesStyle2'
            })
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
    const { answer, button, print,className } = this.state;
    const { survey } = this.props;
    return (
      <div className={className}>
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
              <button className='buttonNext' onClick={this.back}>Back</button>
              {button && <button className='buttonNext' onClick={this.next}>Next</button>}
            </div>  
          </div>
          )}
        </div>
         }
         {!print ? null :
         print.map((p,id)=>
          <div key={id}> 
            <p>Ques. {p.ques}</p> 
            <p>Ans. {p.answer}</p>
          </div>
         )}
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