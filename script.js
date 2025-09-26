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
    if(clickCounter == 1){
    description_two.textContent="We started by making a box and pointer diagram, highlighting each class and its objects";
    document.getElementById("img_two").src = "box_pointer.png";
    document.getElementById("img_two").style.width = "99%" ;
    document.getElementById("img_two").display= "inline" ;
    two.innerText = "next";
    }
    if(clickCounter == 2){
    description_two.textContent = "Next we made the first level with one hero and two enemies. The hero has to navigate through the game screen, pick up computer componants and stack them up to build a computer and win the level";
    document.getElementById("img_two").src = "level1.png";
    }
    if(clickCounter == 3){
        description_two.textContent = "This is the second level that includes three enemies that the player has to watch out for";
        document.getElementById("img_two").src = "level2.png";
    }
    if(clickCounter == 4){
        description_two.textContent = "If an enemy comes in contact with the hero, the hero dies and the game is over!";
        document.getElementById("img_two").src = "gameOver.png";
        two.innerText = "Done";
    }
});

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

