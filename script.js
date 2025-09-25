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
let description_two = document.getElementById("description_two");
let two = document.getElementById("two");
two.addEventListener("click", function() {
    description_two.innerHTML="We started by making a box and pointer diagram";
})
