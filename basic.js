function show_list (id){
    var list = document.getElementById(id);
    list.style.display = "none";
}

function selectContent(id){
    document.getElementById("general").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("programming").style.display = "none";
    document.getElementById("activity").style.display = "none";
    var content = document.getElementById(id);
    console.log(content);
    content.style.display = "block";
}