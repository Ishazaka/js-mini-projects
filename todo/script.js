


const input =  document.getElementById('input')
const todoList =  document.getElementById('todo-list')
let inputVal = '';

input.addEventListener('keyup', function(e){
    
    if(e.key == 'Enter'){
        inputVal = this.value;
        this.value = ''
        // console.log(inputVal)
        addTodo(inputVal)
    }
   
 
})


function addTodo(item){
    todoItem = document.createElement('li');
    // console.log(item)
    todoItem.innerHTML = `${item}
    <i>X</i> 
    `;
    todoItem.addEventListener('click' , function(){
        this.classList.toggle('done')
    })
    todoItem.querySelector('i').addEventListener('click' , function(){
        todoItem.remove();
    })


    todoList.append(todoItem)
}


