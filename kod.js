function kod(){
    var ujszin=document.getElementById("gomb"); 
    ujszin.parentNode.style.backgroundColor = ujszin.value;
} 




function dobokocka(){
	var szam = Math.ceil(Math.random() * 6); 
	
	document.getElementById("dobkoc").innerHTML = ("a dobott szám:" )+(szam);
}
  
  