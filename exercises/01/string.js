function avgStrLen(array) {
  let sum = 0
  for(let i = 0; i < array.length; i++) {
    sum += array[i].length
  }
  console.log(sum/array.length)
}

avgStrLen(["Hejsa", "med", "dig!"])