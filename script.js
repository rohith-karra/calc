		function pow(){
			var a=parseInt(document.getElementById("number1").value);
			var b=parseInt(document.getElementById("number2").value);
			var x=Math.pow(a,b);
			document.getElementById("number2").value=x;
			return false;
		}
		function sqrt(){
			var a=parseInt(document.getElementById("number1").value);
			var x=Math.sqrt(a);
			document.getElementById("number2").value=x;
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
		
			document.getElementById("number2").value=x;
			return false;
		}
		function sin(){
			var a=document.getElementById("number1").value;
			var y= a*(Math.PI/180);
			var x=Math.sin(y);
			document.getElementById("number2").value=x;
			return false;
		}
		function asin(){
			var a=document.getElementById("number1").value;
			var x=Math.asin(a);
			var y= (x*(180/Math.PI)).toFixed(2);
			document.getElementById("number2").value=y;
			return false;
		}
		function cos(){
			var a=document.getElementById("number1").value;
			var y= a*(Math.PI/180);
			var x=Math.cos(y);
			document.getElementById("number2").value=x;
			return false;
		}
		function acos(){
			var a=document.getElementById("number1").value;
			var x=Math.acos(a);
			var y= (x*(180/Math.PI)).toFixed(2);
			document.getElementById("number2").value=y;
			return false;
		}
		function tan(){
			var a=document.getElementById("number1").value;
			var y= a*(Math.PI/180);
			var x=Math.tan(y);
			document.getElementById("number2").value=x;
			return false;
		}
		function atan(){
			var a=document.getElementById("number1").value;
			var x=Math.atan(a);
			var y= (x*(180/Math.PI)).toFixed(2);
			document.getElementById("number2").value=y;
			return false;
		}
              function log(){
	              var a=document.getElementById("number1").value;
		      var x=Math.log10(a);
		      document.getElementById("number2").value=x;
	      }
             function exp(){
	              var a=document.getElementById("number1").value;
		      var x=2.71828183;
		      var y=Math.pow(x,a);
		      document.getElementById("number2").value=y;
	      }
            function ln(){
	              var a=document.getElementById("number1").value;
		      var x=Math.log(a);
		      document.getElementById("number2").value=x;
	      }
