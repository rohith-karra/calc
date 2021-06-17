
		function add(){
			var a=parseInt(document.getElementById("number1").value);
			var b=parseInt(document.getElementById("number2").value);
			var x=a+b;
			document.getElementById("result").innerHTML=x;
			return false;
		}
		function sub(){
			var a=parseInt(document.getElementById("number1").value);
			var b=parseInt(document.getElementById("number2").value);
			var x=a-b;
			document.getElementById("result").innerHTML=x;
			return false;
		}
		function mul(){
			var a=parseInt(document.getElementById("number1").value);
			var b=parseInt(document.getElementById("number2").value);
			var x=a*b;
			document.getElementById("result").innerHTML=x;
			return false;
		}
		function div(){
			var a=parseInt(document.getElementById("number1").value);
			var b=parseInt(document.getElementById("number2").value);
			var x=a/b;
			document.getElementById("result").innerHTML=x;
			return false;
		}
		function mod(){
			var a=parseInt(document.getElementById("number1").value);
			var b=parseInt(document.getElementById("number2").value);
			var x=a%b;
			document.getElementById("result").innerHTML=x;
			return false;
		}
		function pow(){
			var a=parseInt(document.getElementById("number1").value);
			var b=parseInt(document.getElementById("number2").value);
			var x=Math.pow(a,b);
			document.getElementById("result").innerHTML=x;
			return false;
		}
		function pow1(){
			var a=parseInt(document.getElementById("number1").value);
			var x=Math.pow(a,2);
			document.getElementById("result").innerHTML=x;
			return false;
		}
		function sqrt(){
			var a=parseInt(document.getElementById("number1").value);
			var x=Math.sqrt(a);
			document.getElementById("result").innerHTML=x;
			return false;
		}
		function fact(){
			var a=parseInt(document.getElementById("number1").value);
			var x=1;
			if (a == 0 || a == 1){
				 x=1;
			}else{
				for(var i = a; i >= 1; i--){
					x = x * i;
				}
			}  
		
			document.getElementById("result").innerHTML=x;
			return false;
		}
		function sin(){
			var a=document.getElementById("number1").value;
			var y= a*(Math.PI/180);
			var x=Math.sin(y);
			document.getElementById("result").innerHTML=x;
			return false;
		}
		function asin(){
			var a=document.getElementById("number1").value;
			var x=Math.asin(a);
			var y= (x*(180/Math.PI)).toFixed(2);
			document.getElementById("result").innerHTML=y;
			return false;
		}
		function cos(){
			var a=document.getElementById("number1").value;
			var y= a*(Math.PI/180);
			var x=Math.cos(y);
			document.getElementById("result").innerHTML=x;
			return false;
		}
		function acos(){
			var a=document.getElementById("number1").value;
			var x=Math.acos(a);
			var y= (x*(180/Math.PI)).toFixed(2);
			document.getElementById("result").innerHTML=y;
			return false;
		}
		function tan(){
			var a=document.getElementById("number1").value;
			var y= a*(Math.PI/180);
			var x=Math.tan(y);
			document.getElementById("result").innerHTML=x;
			return false;
		}
		function atan(){
			var a=document.getElementById("number1").value;
			var x=Math.atan(a);
			var y= (x*(180/Math.PI)).toFixed(2);
			document.getElementById("result").innerHTML=y;
			return false;
		}
function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

