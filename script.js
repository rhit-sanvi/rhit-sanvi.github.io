function dragstartHandler(ev){
    ev.dataTransfer.setData("text",ev.target.id);
}

function dragoverHandler(ev){
    ev.preventDefault();
}
function dropHandler(ev){
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
clickCounter = 0;
let description_two = document.querySelector("#description_two .text");
let two = document.getElementById("two");
two.addEventListener("click", function() {
    clickCounter++;
    description_two.textContent="We started by making a box and pointer diagram";
    document.getElementById("img_two").src = "picture.jpg";
    document.getElementById("img_two").style.width = "33%" ;
    document.getElementById("img_two").display= "block" ;
    two.innerText = "next";
    if(clickCounter == 2){
        doNext();
    }
});
function doNext(){
    description_two.textContent = "Next we made the first level";
    document.getElementById("img_two").src = "level1.png";
    document.getElementById("img_two").width = "33%" ;
}
let description_three = document.getElementById("description_three");
let three = document.getElementById("three");
three.addEventListener("click", function() {
    description_three.textContent="We started by choosing a data set";
});
let description_one = document.getElementById("description_one");
let one = document.getElementById("one");
one.addEventListener("click", function() {
    description_one.textContent="We started by making a box and pointer diagram";
});

