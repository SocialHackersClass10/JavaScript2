const  myHobbies  =  [ 
    'Méditation' , 
    'Lecture' , 
    'Programmation' , 
    'Sortir avec des amis' , 
    'Aller au gymnase' , 
  ] ;

var ulList = document.createElement("ul");

var eachELement=myHobbies.forEach(putList);

function putList(hobbie){
    var liList = document.createElement("li");
    var nodeli = document.createTextNode(hobbie);
    liList.appendChild(nodeli);
    ulList.appendChild(liList);
}
var myBody = document.querySelector("body");
myBody.appendChild(ulList);

  