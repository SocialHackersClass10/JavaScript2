var myBody = document.body;
myBody.style.fontFamily="Arial, sans-serif";

var mySpan1 = document.getElementById("nickname");
var mySpan2 = document.getElementById("fav-food");
var mySpan3 = document.getElementById("hometown");
mySpan1.innerHTML="Bouba";
mySpan2.innerHTML="Rice";
mySpan3.innerHTML="Conakry";

var myLi= document.getElementsByTagName("li");
for(let i=0; i<myLi.length; i++){
    myLi[i].className="list-item";
}

var myImg = document.createElement("img");
myImg.src="bouba.jpg";
myImg.style.height="200px";
myImg.style.width="250px";
myBody.appendChild(myImg);





