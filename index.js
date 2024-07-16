// const button=document.querySelectorAll(".button");

const button=document.getElementsByClassName("button");

let ans="";

function equalButton(){
  if(ans==""){
    throw Error("Enter Value");
  }
  ans=eval(ans);
  document.getElementById('input').value=ans;
}

function clearButton(){
  ans="";
  document.getElementById('input').value=ans;
}
function calculation(){
  
    ans=ans+button.value;
    document.getElementById('input').value=ans;
}
