function evali(){
			var a=document.getElementById("num").value;
			var x=eval(a);
			document.getElementById("result").value=x;
			return false;
		}