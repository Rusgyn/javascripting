const car = {
  make: 'Honda',
  model: 'Accord',
  year: 2020
}

const keys = Object.keys(car)

console.log(keys) // OUTPUT: (3) ['make', 'model', 'year']


//* My other solution

// function sakyanan (drive) {
//   //let fast = (drive.make) + ' ' + (drive.model) + ' ' +(drive.year) //OUTPUT: Honda Accord 2020
//   let fast = `The make of the car is ${drive.make}, model is ${drive.model}, and the year is ${drive.year}`

//   return fast
// }

// console.log(sakyanan(car)) // OUTPUT: The make of the car is Honda, model is Accord, and the year is 2020