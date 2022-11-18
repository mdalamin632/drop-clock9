function myLoading(){
    let spinLoading = document.getElementById("main-class");
    let first = document.getElementById("hand");
    console.log(first);
    if(first.innerHTML.length > 6){
        first.innerHTML = "";
    }
    else{
        first.innerHTML += ".";
    }
}
window.setInterval(myLoading,500);