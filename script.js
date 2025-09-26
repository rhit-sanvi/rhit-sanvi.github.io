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
let clickCounter = 0;
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
        description_two.innerHTML = "If an enemy comes in contact with the hero, the hero dies and the game is over!";
        document.getElementById("img_two").src = "gameOver.png";
        two.innerText = "Done";
    }
    if(clickCounter == 5){
        description_two.innerHTML = "[click project 2]";
        clickCounter = 0;
        
    }
});
let clickCounterTwo = 0;
let description_three = document.getElementById("description_three .text");
let three = document.getElementById("three");
let img_3 = document.getElementById("img_three");
three.addEventListener("click", function() {
   clickCounterTwo++;
   if(clickCounterTwo == 1){
    description_three.textContent = "The data set chosen was that of airport traffic flight details in India. Here is part of it:";
    img_3.src = "data.png";
    img_3.style.width = "99%";
    img_3.display="inline";
    three.innerText = "next";
   }
   if(clickCounterTwo == 2){
    description_three.textContent="The first graphical representation:";
    img_3.src = "120-1.png";
   }
   if(clickCounterTwo == 3){
    description_three.textContent="The second graphical representation:";
    img_3.src = "120-2.png";
    three.innerText = "done";
   }
   if(clickCounterTwo == 4){
    description_three.textContent = "[click project 3]";
    clickCounterTwo == 0;
   }
});
let clickCounterThree = 0;
let description_one = document.getElementById("description_one .text");
let one = document.getElementById("one");
let img_1 = document.getElementById("img_one");
one.addEventListener("click", function() {
    clickCounterThree++;
   if(clickCounterThree == 1){
    description_one.textContent = "Our prompts into AI started with 'Explain Prim's algorithm' to 'How is the algorithm optimizing an already existing graph without creating a loop?' to asking it for more complex stuff like the pseudo code";
    three.innerText = "next";
   }
   if(clickCounterThree == 2){
    description_one.textContent="Dense graph returned by the code after running Prim's algorithm";
    img_1.src = "graph.png";
    img_1.style.width = "99%";
    img_1.display="inline";
   }

   if(clickCounterThree == 3){
    description_one.textContent="After accounting for each edge case, the total worse cast runtime added up to: V + 2E + (V-1)logE + 2ElogV + E";
    one.innerText = "done";
   }
   if(clickCounterThree == 4){
    description_one.textContent = "[click project 1]";
    clickCounterTwo == 0;
   }
});

