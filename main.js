let btn = document.querySelector(".btn")
let sumaryContent = document.querySelector(".sumaryContent")
let container = document.querySelector(".container")
console.log(sumaryContent);

btn.addEventListener("click", ()=>{
    btn.classList.toggle("selected")

        let arrow = document.createElement("div")
        arrow.innerHTML = `<img src="/images/icon-reaction.svg" alt="">`
        arrow.classList.add("btn-arrow")

        container.replaceChild(arrow, sumaryContent)

        arrow.addEventListener("click",() => {
            container.replaceChild(sumaryContent,arrow)
        })



})

