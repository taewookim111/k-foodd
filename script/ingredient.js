const mask = document.querySelectorAll(".mask");
const hidden = document.querySelectorAll(".hidden");

mask.forEach((el,index)=>{
    el.addEventListener("click", ()=>{
        mask[index].classList.remove("on");
        hidden[index].classList.add("on");
    })
})
hidden.forEach((el,index)=>{
    el.addEventListener("click", ()=>{
        hidden[index].classList.remove("on");
        mask[index].classList.add("on");
    })
})