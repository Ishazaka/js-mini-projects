// wscube tech channel

const enddate = '20 october 2022 12:00 PM';

document.getElementById('end-date').innerHTML = enddate;

const inputs = document.querySelectorAll('input');




function clock(){

  const  end = new Date(enddate);
  const now = new Date()
//  console.log(end)

  const diff = (end - now) / 1000 ;  //the diff is in mili seconds // dividing bu 1000 converts diff into seconds
//   console.log(diff)
  //converts into days
//   console.log(Math.floor(diff  / 3600 / 24))  // 3600 => (60 /60)
inputs[0].value = Math.floor(diff  / 3600 / 24)
  inputs[1].value  = Math.floor(diff / 3600) % 24
  inputs[2].value  = Math.floor(diff / 60) % 60
  inputs[3].value  = Math.floor(diff) % 60
 }

clock();

setInterval(() => {
    clock()
}, 1000)


// 1 day = 24 hours
// 1 hour = 60 minutes
// 1 minute = 60 seconds
