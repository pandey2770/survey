var json = [
  { 
    ques:'what is your name.?'
  },
  {
    ques:'what is your age.?'
  },
  {
    ques:'where did you hear about this.?'
  },
  {
    ques:'what is your first reaction after watching the product.?'
  },
  {
    ques:'would you recommend this prodect to your any one..?',
  }
]

export const firstQues = () => {
  return {
    type:'FIRST',
    data:json[0]
  }
}

export const next = () => {
  return {
    type:'NEXT',
    data:json[2]
  }
}

export const back = () => {
  return {
    type:'BACK',
    data:json
  }
}