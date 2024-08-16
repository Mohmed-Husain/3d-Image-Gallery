    const imageContainerE1 =document.querySelector(".image-container")

    const PrevE1 = document.getElementById("Prev")
    const NextE1 = document.getElementById("Next")

    let x=0;
    let timer;
    
    function stopAutoRotate() {
        
        if (timer) {
            clearInterval(timer);
        }
        
        
        timer = setInterval(() => {
            x = x - 45; 
            updateGallery();
        }, 3000);
    }
    
    function updateGallery(){
        imageContainerE1.style.transform=`perspective(1000px) rotateY(${x}deg)`;

    }

    PrevE1.addEventListener("click",()=>{
        x= x + 45 ;
        
        updateGallery()
        stopAutoRotate()
    })

    NextE1.addEventListener("click",()=>{
        x= x - 45 ;
        
        updateGallery()
        stopAutoRotate()
    })


stopAutoRotate()


