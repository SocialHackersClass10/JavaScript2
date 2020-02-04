document.body.style.fontFamily = "Arial,sans-serif";
document.querySelector("#nickname").innerHTML = "Stef";
document.querySelector("#fav-food").innerHTML = "Pastitsio";
document.querySelector("#hometown").innerHTML = "New Philadelphia";

let listItem = document.getElementsByTagName("li");
for (let i = 0; i < listItem.length; i++) {
    listItem[i].className = "list-item"
}