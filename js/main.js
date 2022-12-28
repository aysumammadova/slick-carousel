const btnNext = document.querySelector(".btn-next")
const btnPrev = document.querySelector(".btn-prev")
const boxes = document.querySelectorAll(".onebyone-box--name")
let currentBox = 0;
let latestBox = boxes.length-1;

// console.log(latestBox)

btnNext.addEventListener("click",function(){
    // console.log("is working...")
    if(currentBox==latestBox){
        currentBox=0
    }
    else{
        currentBox++
    }

    boxes.forEach((box,index) =>{
        box.style.transform = "translateX(" + 100 * (index - currentBox) + "%)";
    })
})

btnPrev.addEventListener("click",function(){
    // console.log("is working..")
    if(currentBox==0){
        currentBox=latestBox
    }
    else{
        currentBox--
    }
    boxes.forEach((box,index) =>{
        box.style.transform = "translateX(" + 100 * (index - currentBox) + "%)";
    })
})

// console.log(boxes)
