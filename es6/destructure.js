
console.log('destructuring')


// object
const employee = {
    firstname: 'Demo',
   lastname: 'USer',
//    age: 28,
   id: 1,
   department: 'UI/UX',
   address: {
    city: 'reston',
    country: 'USA',
    skills: {
        ui: 'good',
        ux: 'better', 
        develop: 'best'
    }
   }
}
// destucturing the values
//   let names = employee.firstname + ' ' +  employee.lastname
//   let age = employee.age;

//  let {firstname , lastname : Surname = 'company member' , age} = employee
//  let names = firstname + ' ' + Surname
//   console.log(names , age)

// destucturing of object in object
let {address} = employee
  console.log(address)

//   destucturing the value of key in nested object
let {address: {city}} = employee
  console.log(city)

// destructuring the values of deep nested object
let {address: {skills: {ux} }} = employee
console.log(ux)

// We can destructure in functions as well
// In parameters we can destructure it

function getData({age = 'not estimated' , firstname: name}){
    return `the name is ${name} and the age is ${age}`
}

console.log(getData(employee))



// array destructure


// const fruits = ['apple' , 'banana' , 'orange' , 'pineapple' , 'grapes']

// //before that
// const frut1 = fruits[0] 
// const frut3 = fruits[2] 
// console.log(frut3)

// //destructuring

// const [fruit2 , fruit3 ] = fruits
// console.log(fruit2 ,fruit3 )

// const [,,,fruit4 ] = fruits
// console.log(fruit4 )

// const [fruit1, ...rest] = fruits
// console.log(fruit1 , rest)


// destructuring array and object together
const groceryList = [
    {item: 'apples' , price: 20},
    {item: 'banana' , price: 30},
    {item: 'orange' , price: 25},
    {item: 'biscuits' , price: 34},
    {item: 'water' , price: 14},

]

// console.log(groceryList[1].item)

const [,,{item} , ...rest ] = groceryList
console.log(item )
console.log(rest)

// destructuring of array in object
const userlist = {
    name: 'rogger',
    locations: ['baltimore' , 'reston', 'richmond']
}

const {locations: [,,loc1]} = userlist
console.log(loc1)

// console.log(userlist.locations[1])


// destructuring array in array
const users = [
    ['john' , 'kevin'],
    ['rogger' , 'noah' ],
    ['henry' , 'david' ]
]

// // before es6
// const alldata =  users.map((item) => {
//     return {firstname: item[0] , lastname: item[1]}
//  } )
//  console.log(alldata)

 const newdata =  users.map(([firstname , lastname]) => {
        return {firstname , lastname}
    });

    console.log(newdata);

