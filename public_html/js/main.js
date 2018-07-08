var myHead=document.getElementById("heading");
var myItem = document.getElementById("our-list").getElementsByTagName("li");

for(var i=0; i<myItem.length; i++){
   
    myItem[i].addEventListener("click", activeItem);
};

function activeItem(){
    myHead.innerHTML=this.innerHTML;
};

