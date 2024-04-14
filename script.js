
console.log("hello");
btn.addEventListener("mousemove", setdark);
btn.addEventListener("mouseout", setlight);

function setdark(){
    document.body.style.background = "linear-gradient(270deg, #ff994f, #fa6d86)";
    btn.style.color = "purple"
}


function setlight(){
    document.body.style.background = "linear-gradient(270deg, #ffdad5,#ba798a)";
    btn.style.color = "yellow"
}
