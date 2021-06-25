function add(i)
		{
			document.getElementById("result").value+=i;
		}
		
function solve()
		{
			var x = document.getElementById("result").value;
			var y = eval(x);
			document.getElementById("result").value = y;
		}
function clr()
		{
			document.getElementById("result").value = "";
		}
function back(){
			document.getElementById("result").value=document.getElementById("result").value.slice(0,-1);
		}
