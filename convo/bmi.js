function convo(){
 var a=document.getElementById("weight").value;
 var b=document.getElementById("height").value;
 var d=b/100;
 var c=(a/Math.pow(d,2)).toFixed(1);
 document.getElementById("res").value=c;
 if(c<18.5){
    var str="UnderWeight";
    document.getElementById("status").value=str;
 }
 else if(c>18.5 && c<24.9){
    var str="Healthy Keep it up"
    document.getElementById("status").value=str;
 }
 else if(c>25 && c<29.9){
    var str="OverWeight"
    document.getElementById("status").value=str;
 }
 else{
    var str="OMG Obese!! Please hit the Gym"
    document.getElementById("status").value=str;
 }
}
