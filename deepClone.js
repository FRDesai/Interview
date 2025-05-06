// const deepClone = (value, visited = new WeakMap()) => {
//     // Handle null, primitive types, and non-objects
//     if (value === null || typeof value !== 'object') return value;
  
//     // Prevent circular references using WeakMap
//     if (visited.has(value)) return visited.get(value);
  
//     // Handle Date
//     if (value instanceof Date) return new Date(value.getTime());
  
//     // Handle RegExp
//     if (value instanceof RegExp) return new RegExp(value.source, value.flags);
  
//     // Handle Arrays
//     if (Array.isArray(value)) {
//       const clone = value.map(item => deepClone(item, visited));
//       visited.set(value, clone); // Mark this array as visited
//       return clone;
//     }
  
//     // Handle Objects
//     const clone = Object.entries(value).reduce(
//       (acc, [key, val]) => {
//         acc[key] = deepClone(val, visited); // Recursively deep clone
//         return acc;
//       },
//       {}
//     );
  
//     visited.set(value, clone); // Mark this object as visited
//     return clone;
//   };

//   const original = {
//     name: "Fathima",
//     date: new Date(),
//     regex: /hello/i,
//     nested: [1, { deep: "yes" }]
//   };
      
// const copy = deepClone(original);
// console.log(copy)


//Object.entries(value) basically converts it into nested array. The outer object will be converted into array, along with that 
// the key value pairs will also be arrays, 

const deepClone = (value, visited = new WeakMap()) =>{

  if(value === null || typeof value !== 'object') return value

  if(value instanceof RegExp){
    return new RegExp(value.source, value.flags)
  }

  if(value instanceof Date){
    return new Date(value.getTime())
  }

  if(Array.isArray(value)){
    const clone = value.map(item=>deepClone(item, visited))
    visited.set(value, clone)
    return clone
  }

  const clone = Object.entries(value).reduce((acc, [key, value])=>{
      acc[key] = deepClone(value, visited)
  }, {})

  visited.set(value, clone)
  return clone
}