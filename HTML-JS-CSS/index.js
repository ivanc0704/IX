let name = "Ivan";

const lastName = "Chen";

let address = "5 Riepen Park, Johannesburg";

let age = 31;

let uniqueKey = Symbol("key")
let uniqueKey2 = Symbol("key")

let isCool = true;
let isVeryCool = false;

let x = 5;
let y = x;
y = 10;

let arr = [1,2,3];
let arr2 = arr;
arr2.push(4);
console.log(arr);

console.log(x);



console.log(uniqueKey == uniqueKey2);

console.log(typeof name);


console.log(name);
console.log(lastName);

console.log(isCool);

console.log(`My name is ${name}`); // interpolation
console.log("My name is"+ name); // concatination

console.log("Sub string:" + name.substring(1,3));
/**
 * Non primitive data types
 */
// objects

const person = {
    firstName: "Ivan",
    lastName: "Chen",
    address:{
    streetName:"Ripen Ave",
    suburb: "Ripen Park",
    streetNumber:5,
    } ,
    age: 18,
    getFullName: () => {
        return person.firstName + " " + person.lastName;
    },

};

console.log(person);

console.log(person.getFullName);

// arrays

let arr1 = new Array(1,2,3,4);
console.log(arr1);
let arr3 = [1,2,3,4, "a", "b", "c", person];
console.log(arr3);

let fruits = ["Apple", "Orange", "Pear", "Mango"];
console.log(fruits[1]);

// higher order array methods

const filterFunction = (fruit)=>{

    return fruit !== "Apple";
}

const filteredFruits = fruits.filter(filterFunction);
console.log(fruits)
console.log(filteredFruits)
/**
 * loops
 */

const arr4 = [1,2,3,4];
// for

for(let i = 0; i < arr4.length; i++){
    const fruit = fruits[i];
    console.log(fruit);
}

console.log("\n for of")


// for of
for(let fruit of fruits) {
    console.log(fruit);
}

// for each
console.log("\n forEach")
fruits.forEach((fruit) =>{
    console.log(fruit)
})

const todos = [
    {
      id: 1,
      title: "take out the trash",
      completed: true,
    },
    {
      id: 2,
      title: "feed the dogs",
      completed: false,
    },
    {
      id: 3,
      title: "go to the bank",
      completed: true,
    },
  ];

  const getCompletedTodos = (todos) => {
    return todos.filter((todo) => {
        return todo.completed == true;
    })
  }
  console.log(getCompletedTodos(todos))

  const newTodos = todos.map(todo=>{
    return{
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
        priority:"Low",
    };
  })

  console.log(newTodos);

/**
 * conditional statements
 */

let task = {id: 3,
    title: "go to the bank",
    completed: true,}

if (task.completed === true) {
    console.log("Task Done");

}else{
    console.log("Task not Done")
}

switch(task.completed){
    case true:
        console.log("task done");
        break;
    case false:
        console.log("task not done");
        break;
    case null:
        console.log("Task not done");
        break;
    default:
        console.log("Task not done");
        break;
}

/**
 * functions
 */

let factor = 2

function addFactor(val){
    return val*factor;
}

console.log(addFactor(10));

const addFactorVar = (val) =>{
    return val*factor;
};

console.log(addFactorVar(15))

function fibbonacci(count){
    if (count === 1){
        return [0]
    }else if ( count === 2)
        return [0,1]
    else{
        let sequence = [0,1]
        for(i = 1; i < count-1; i++){
            sequence.push(sequence[i]+sequence[i-1])

        }
        return sequence
    }
}

console.log(fibbonacci(10));

function trianglePerimeter(sides){
    if (sides.length === 3){
        let s = ((sides[0]+sides[1]+sides[2])/2)
        return ((s*(s-sides[0])*(s-sides[1])*(s-sides[2]))**.5)
    }else {
        return null
    }
}

let triangleSides = [3,4,5]

console.log(trianglePerimeter(triangleSides))