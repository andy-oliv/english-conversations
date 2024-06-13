let questions = document.querySelectorAll(".question")
const whatsAppLogo = document.querySelector(".whatsLogo")
let messageWrapper = document.querySelector(".messageWrapper")
let pageUpBtn = document.querySelector(".pageUp")


questions.forEach((question)=>{
    question.addEventListener("click", ()=>{
        const answer = question.querySelector(".answer")
        answer.classList.toggle("active")
        const arrow = question.querySelector(".bxs-chevron-up")
        if(arrow.style.transform === "rotate(180deg)"){
            arrow.style.transform = "rotate(360deg)"
        }else{
            arrow.style.transform = "rotate(180deg)"
        }
    })
})


whatsAppLogo.addEventListener("click", ()=>{
    messageWrapper.classList.toggle("visible")
})


window.addEventListener("scroll", ()=>{
    const pageUpBtnRect = pageUpBtn.getBoundingClientRect()
    if(pageUpBtnRect.y <= window.innerHeight/1.4){
        pageUpBtn.style.visibility = "visible"
        pageUpBtn.style.opacity = 1
    }else{
        pageUpBtn.style.visibility = "hidden"
        pageUpBtn.style.opacity = 0
    }
})