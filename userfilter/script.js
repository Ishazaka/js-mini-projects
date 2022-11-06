let resultArea = document.getElementById('result')
let search = document.getElementById('filter');
let resutlarr = []



  async function fetchData(){
    let API_KEY =  'https://randomuser.me/api?results=30';
       let res = await fetch(API_KEY)
       let data = await res.json()
      const  resutls =  data.results;
    

    resutls.forEach((item) => {
        let div =   document.createElement('div');
        resutlarr.push(div)
        let alldata;
         alldata = `
         <h3> ${item.name.first}</h3>
         <li>${item.phone} </li>
         `
        div.innerHTML += alldata ;
        resultArea.appendChild(div)
   
      } )
    
   }


   search.addEventListener('input' , function(e){
        let searchVal =  e.target.value;
        console.log(searchVal);
        resutlarr.forEach((item) => {
            console.log(item)
            if(item.innerText.toLowerCase().includes(searchVal.toLowerCase())){
                item.style.display = 'block'
                // item.classList.remove('hide')
            }else{
                // item.classList.add('hide')
                item.style.display = 'none'
            }
        })
     
   })
   








   fetchData()


