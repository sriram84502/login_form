let bt=document.querySelector("#bava");
bt.addEventListener("click",function(){
    let k=document.getElementById("password");
    if(k.value === "")
    document.getElementById("message").innerHTML = "error";
});
