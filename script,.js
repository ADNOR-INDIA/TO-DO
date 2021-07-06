const button= document.getElementById("enter");
const input= document.getElementById("inputitems");
const ul= document.getElementById("list");

function textlength(){
    return input.value.length;
}

function cool(){
    const li= document.createElement("li");
    const dele = document.createElement('input');
   dele.type="button";
   dele.id="id_1";
   const checkbox = document.createElement('input');
   checkbox.type = "checkbox";
   
    ul.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(input.value));
    
    li.appendChild(dele);
    dele.value="delete";
    input.value="";
    
    dele.addEventListener("click", function(){
       li.parentNode.removeChild(li);
    })
    checkbox.addEventListener("click", function(){
        li.classList.toggle("awesome");
    });
}


button.addEventListener("click", function(){
    if(textlength()>0){
   cool();
    }
})
input.addEventListener("keypress", function(enterkey){
    if(textlength()>0 && enterkey.which=== 13){
    cool();
    }
})




