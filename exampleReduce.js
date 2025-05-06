//add Numbers

const addNumbers = [1, 2, 3, 4].reduce((acc, num)=>{
    return acc + num
}, 0)

console.log(addNumbers)

//multiply add numbers
const mulNumbers = [1,2,3,4].reduce((acc, num)=>{
    return acc * num
}, 1)

console.log(mulNumbers)

const entries = [["name", "Fathima"], ["age", 25]];

const convertedObj = entries.reduce((acc, [key, value])=>{
    acc[key] = value
    return acc
}, {})

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const occurences = fruits.reduce((acc, fruit)=>{
    acc[fruits] = (acc[fruits] || 0) + 1
    return acc
},{})

const people = [
    { name: "Fathima", age: 25 },
    { name: "Ali", age: 30 },
    { name: "Zara", age: 25 },
  ];

  const groupByAge = people.reduce(( acc, object)=>{
    acc[object.age] = acc[object.age] || [];
    acc[object.age].push(object)
    return acc
  }, {})

//   console.log(groupByAge)

  const scores = [55, 67, 89, 99, 34];
  const max = scores.reduce((acc, score)=>{
     acc = score > acc ? score: acc;
    return acc
  },0)

  console.log(max)