
// array methods

const groceryList = [
    {name: 'apples' , price: 20 , category: 'fruits' },
    {name: 'orange' , price: 25 , category: 'fruits'},
    {name: 'banana' , price: 30 , category: 'fruits'},
    {name: 'biscuits' , price: 34 , category: 'mille'},
    {name: 'water' , price: 14 , category: 'mille'},
    {name: 'milk' , price: 18 , category: 'dairy'},
    {name: 'yougurt' , price: 22 , category: 'dairy'},
    {name: 'juice' , price: 37 , category: 'mille'},
    
]
// filter method
  const filterdata =   groceryList.filter(item =>  item.category.toLowerCase() === 'mille') 
    console.log(filterdata);


// sort method
    // const sortnames =   groceryList.sort((a,b) =>  a.name.localeCompare(b.name) )
    // console.log(sortnames)

    // const sortnumber =  groceryList.sort((a,b) => a.price - b.price )
    // console.log(sortnumber)



    const button =  document.createElement('button')
    button.innerHTML = 'Click me'
     button.style.width = '90px'
     button.style.background = 'blueviolet'
     const table = document.createElement('div')
     document.body.appendChild(button)
     document.body.appendChild(table);
     table.style.background = 'skyblue'
     table.innerHTML =  groceryList.map((item) => {
        return  ` <li> name:  ${item.name}</li>
        <li> price:  ${item.price}</li>
        `;
     })
   let convert = true      


     button.addEventListener('click' , SortByname)
 
    
     function SortByname(){
        if(convert == true){
            const namesorts =  groceryList.sort((a, b) => a.name.localeCompare(b.name))
            table.innerHTML =  namesorts.map((item) => {
                return  ` <li> name:  ${item.name} , price:  ${item.price}  </li>
                `;
             })
             convert = false
           
        }else{
            const pricesorts =  groceryList.sort((a, b) => a.price - b.price)
            table.innerHTML =  pricesorts.map((item) => {
                return  ` <li> name:  ${item.name} , price:  ${item.price}  </li>
            
                `;
             })
             convert = true
        }

       
     
       }

   
