function convo(){
 var a=document.getElementById("weight").value;
 var b=document.getElementById("height").value;
 var d=b/100;
 var c=(a/Math.pow(d,2)).toFixed(1);
 document.getElementById("res").value=c;
}
