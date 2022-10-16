

// (learn from wscube tech )

const slides = document.querySelectorAll('.slide');
let counter = 0


slides.forEach((elem , index) => {
    elem.style.bottom = `${index * 100}%`  
    //if using style.left then in imageslider function do translate X and also add minus before counter
})

   function goprev(){
    if(counter > 0){
        counter--;
        imageslider()
    }
  
   }

   function gonext(){
    if(counter < slides.length - 1){
        counter++;
        imageslider()
    }
 
   }

 function imageslider(){
    slides.forEach((slide) => {
     slide.style.transform = `translateY(${counter * 100}%)`
    })
 }
