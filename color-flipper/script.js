 const colors = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 'A' , 'B' , 'C' , 'D' , 'E' , 'F'];

const  textArea = document.getElementById('text');


 function flipper(){
    let hexcolor = '#'
     for(let i = 0; i < 6; i++){
        hexcolor += colors[random()]
     }
     document.body.style.backgroundColor = hexcolor;
     textArea.innerText = hexcolor;
 }

 

 function random(){
    return Math.floor(Math.random() * colors.length)
 }
