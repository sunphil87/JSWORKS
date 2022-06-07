let itemList = []
let addBtn = document.getElementById("add");
addBtn.addEventListener("click", addList);

function addList(){
    let item = document.getElementById("item").value;

    itemList.push(item);
    console.log(itemList);
    document.getElementById("item").value = "";
    document.getElementById("item").focus();

    showList();
}

function showList(){
    let list = "<ul>";
    for(var i = 0; i < itemList.length; i++){
        // document.getElementById("itemList").innerHTML = itemList[i];
        list += "<li>" + itemList[i] + "<span class='close' id =" + i + ">X</span></li>";
    }
    list += "</ul>"
    document.getElementById("itemList").innerHTML = list;

    let removeList = document.querySelectorAll(".close");

    for(var i = 0; i < removeList.length; i++){
        removeList[i].addEventListener("click", remove);
    }
}

function remove(){
    console.log(this);
    let id = this.getAttribute("id");
    itemList.splice(id, 1);

    showList();
}