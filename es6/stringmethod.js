
console.log('string methods')

const firstname = 'Engineer';
console.log(firstname.substring(0 , 4))
console.log(typeof firstname)   //string
// By constructor function , you can define vaiables (primitive data types)


let lastname = new String('Developer');
console.log(typeof lastname)   //object

// substr(accepts two argumets, second is optional (1, 4) starting from 1 and give us total four characters )
//  substring (accepts two argumetns, second is optional (1 , 5) starting from 1 index and give us all till index 5 but not including 5th index)



// we communicate frontend with backend using json
// if I want to send data to server , I have to convert it in into string using json.stringify 
// if i want to get data from server, i have to convert it in js object using json.parse

