let diceRoll = [1,6,6,2,3,4,6];

function get6s_v1(array) {
  array.forEach((element, index) => {
    if (element == 6) {
      console.log(index + ":" + element)
    }
  });
}

function get6s_v2(array) {
  array.forEach((element, index) => {
    if (is6(element)) {
      console.log(index + ":" + element)
    }
  });
}

function get6s_v3(array, cmp) {
  array.forEach((element, index) => {
    if (cmp(element, 6)) {
      console.log(index + ":" + element)
    }
  });
}

function findDices_v1(array, compare, n) {
  array.forEach((element, index) => {
    if (compare(element, n)) {
      console.log(index + ":" + element)
    }
  });
}

function is_n(v, n) {
  return (v == n) ? true : false;
}

// get6s_v1(diceRoll);
// get6s_v2(diceRoll);
// get6s_v3(diceRoll, is_n);
// let a = findDices_v1;
// a(diceRoll, is_n, 1);
let b = (v) => findDices_v1(diceRoll, is_n, v);
b(3);