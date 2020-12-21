var text="";

function f1(x){
 text+=x;
  document.getElementById("type").innerHTML=text;
}


function back(){
  text='';
   document.getElementById("type").innerHTML=text;
}
function feq(){
text=eval(text);
   document.getElementById("type").innerHTML=text;
}
