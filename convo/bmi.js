function convo(){
 var a=document.getElementById("weight").value;
 var b=document.getElementById("height").value;
 var d=b/100;
 var c=(a/Math.pow(d,2)).toFixed(1);
 document.getElementById("res").value=c;
 if(c<18.5){
    document.getElementById("status").value="Under Weight";
 }
 else if(c>18.5 && c<24.9){
    document.getElementById("status").value="Healthy keep it up";
 }
 else if(c>25 && c<29.9){
    document.getElementById("status").value="Over Weight";
 }
 else{
    document.getElementById("status").value="OMG Obese!! Please hit the Gym";
 }
}
