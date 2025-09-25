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
reset.addEventListener("click", function(){
    reset(dropHandler);
    reset(dragoverHandler);
    reset(dragstartHandler);
});
function reset(event){
    event.reset();
}
