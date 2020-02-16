"use strict"
const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
];

let newUl = document.createElement("ul");
document.body.appendChild(newUl)

function hobbiesIntoList() {
    myHobbies.forEach(function (item) {
        let newLi = document.createElement("li");
        newLi.innerHTML = item;
        newUl.appendChild(newLi);
    })
}
hobbiesIntoList();
