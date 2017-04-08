function myFunction() {
    var x = document.getElementById("numb").value;
	var y = Math.floor((Math.random() * 10) + 1);
	var z ;
	
    document.getElementById("div").innerHTML +="</p>";
	document.getElementById("div").innerHTML += "你所選的數字為：" + x;
	document.getElementById("div").innerHTML +="</p>";
	document.getElementById("div").innerHTML += "電腦選的數字為：" + y;

	var rand = Math.floor((Math.random() * 10) + 1);
	//rander >= 5 比大，否則比小
    if(rand >=5){
		if(x>y){
			document.getElementById("div").innerHTML+=" 這次比大，你贏了";
		}else{
			document.getElementById("div").innerHTML+=" 這次比大，你輸了";
		}		
	}else{
		if(x<y){
			document.getElementById("div").innerHTML+=" 這次比小，你贏了";
		}else{
			document.getElementById("div").innerHTML+=" 這次比小，你輸了";
		}
	}    
}