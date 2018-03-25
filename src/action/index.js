var json = [
  {
    ques: 'what is your name.?'
  },
  {
    ques: 'what is your age.?'
  },
  {
    ques: 'where did you hear about this.?'
  },
  {
    ques: 'what is your first reaction after watching the product.?'
  },
  {
    ques: 'would you recommend this prodect to your any one..?'
  }
];
var i = 0;
var result = [];
export const firstQues = () => {
  return {
    type: 'FIRST',
    data: json[0]
  };
};

export const next = (ques, answer) => {
  var check = result.filter(x => x.ques !== ques);
  if (check.length >= 1) {
    result = check;
    result.push({ ques, answer });
  } else {
    result.push({ ques, answer });
  }
  i++;
  if (i === json.length) {
    i = 0;
    return {
      type: 'DONE'
    };
  } else {
    if (localStorage) {
      var resultJson = JSON.stringify(result);
      localStorage.clear();
      localStorage.result = resultJson;
      return {
        type: 'NEXT',
        data: json[i]
      };
    }
  }
};

export const back = () => {
  i--;
  if (i === -1) {
    i = 0;
    return {
      type: 'BACK',
      data: json[i]
    };
  } else {
    return {
      type: 'BACK',
      data: json[i]
    };
  }
};

export const preview = () => {
  return {
    type: 'SHOW',
    data: result
  };
};
