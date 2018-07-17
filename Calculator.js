var flag = false;

function insertNumber(num){
  if(flag){
    document.getElementById("display").value = '';
    if((document.getElementById("display").value != '') || (num != 0)){
      document.getElementById("display").value = document.getElementById("display").value + num;
    }
    flag = false;
  }
  else{
    if((document.getElementById("display").value != '') || (num != 0)){
      document.getElementById("display").value = document.getElementById("display").value + num;
    }
  }
}

function insertOperator(sym){
  if(document.getElementById("display").value != ''){
    document.getElementById("display").value = document.getElementById("display").value + sym;
    flag = false;
  }
}

function clean(){
  document.getElementById("display").value = '';
}

function calculate(){
  var expression = document.getElementById("display").value;
  if(expression){
    document.getElementById("display").value = eval(expression);
    flag = true;
  }
}
