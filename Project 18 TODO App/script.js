const inputBox = document.getElementById("input_box");
const listcontainer = document.getElementById("list_container");

function addTask(){
    if(inputBox.value === ""){
        alert("You must Write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
}

list_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
}, false);

