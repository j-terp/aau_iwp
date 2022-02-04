let row
let black = "#"
let white = " "
let sqr
for (let i = 0;i<8;i++) {
  row = []
  for (let j = 0;j<8;j++) {
    row += (i % 2) ? (j % 2 ? white : black) : ( j % 2 ? black : white)
  }
  console.log(row)
}