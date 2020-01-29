var mesLivres=[
    {
        title:"Les Crapauds-brousse",
        author:"Tierno Monénembo",
        alreadyRead:true,
        imgSrc:"https://media.senscritique.com/media/000006441212/source_big/Les_crapauds_brousse.jpg",
    }, 
    {
        title: "La Révolte des bovidés",
        author: "Amadou Hampâté Bâ",
        alreadyRead: false,
        imgSrc:"https://images-eu.ssl-images-amazon.com/images/I/61d84huBGyL.jpg",
    }, 
    {
        title: "Hosties noires",
        author: "Léopold Sédar Senghor",
        alreadyRead: true,
        imgSrc:"https://images-na.ssl-images-amazon.com/images/I/41ZQjlvZ2QL._AC_SY400_.jpg",
    }

]
var para = document.createElement("p");
var ulList = document.createElement("ul");
for (let livreX of mesLivres ) {
    var div=document.createElement("div");
    var liList = document.createElement("li");
    var myImg = document.createElement("img");
    if(livreX.alreadyRead){
        div.style.background="red";
    }else{div.style.background="green";}
    myImg.src=livreX.imgSrc;
    myImg.style.height="100px";
    myImg.style.width="100px";
    var nodeli = document.createTextNode(livreX.title+' of '+livreX.author);
    liList.appendChild(nodeli);
    ulList.appendChild(div);
    div.appendChild(liList);
    div.appendChild(myImg);
    console.log(mesLivres.length)  ;
}
var myBody = document.querySelector("body");
myBody.appendChild(para);
para.appendChild(ulList);

