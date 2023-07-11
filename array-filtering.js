// const pets = ['cat', 'dog', 'elephant'];      
// const filtered = pets.filter(function (pet) {  
//   return (pet !== 'elephant')  
// }  )

// console.log(filtered)

const numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filtered = numbers.filter(function (number) {  
  return (number % 2) === 0  // === meaning strictly equal to
}  )

console.log(filtered)