


 const  btns = document.querySelectorAll('.btn');
countval = document.getElementById('count-value')

let count = 0

 btns.forEach(function(element) {
    element.addEventListener('click' , function(e){
     let styles =  e.target.classList
       if(styles.contains('minus') && count > 0){
        count--
       } else if( styles.contains('plus')){
        count++
       } else{
        count = 0
       }
       if(count > 10){
        countval.style.color = 'green';
       }
       countval.innerText = count
    });
});
