


const text = 'hello how are you';
const len = text.length
let index = 0;


function showText(){
  document.body.innerHTML = text.slice(0 , index)
  index++

  if(index > len){
    index = 0
  }
}


setInterval(showText , 200 )