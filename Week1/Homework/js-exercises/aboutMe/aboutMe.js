//Changing Font
document.body.style.fontFamily = "Arial,sans-serif";
//Adding personal info
document.querySelector("#nickname").innerHTML = "Stef";
document.querySelector("#fav-food").innerHTML = "Pastitsio";
document.querySelector("#hometown").innerHTML = "New Philadelphia";
//Adding class in each li inside the ul
let listItem = document.getElementsByTagName("li");
for (let i = 0; i < listItem.length; i++) {
    listItem[i].className = "list-item"
}
//Adding Photo
let myPhoto = document.createElement("img");
myPhoto.src = "https://media-exp1.licdn.com/dms/image/C5603AQH-4xn8lqwm_A/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=cdHKfe_B5JDWPC76dV4BqGO1uUhKCzQk6ISv99lTYcY";
document.body.appendChild(myPhoto);