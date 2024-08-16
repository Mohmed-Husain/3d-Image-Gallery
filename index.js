const imageContainerE1 =document.querySelector(".image-container")

const PrevE1 = document.getElementById("Prev")
const NextE1 = document.getElementById("Next")

let x=0
PrevE1.addEventListener("click",()=>{
    x= x + 45 ;
    updateGallery()
})

NextE1.addEventListener("click",()=>{
    x= x - 45 ;
    updateGallery()
})


function updateGallery(){
    imageContainerE1.style.transform=`perspective(1000px) rotateY(${x}deg)`;
}

