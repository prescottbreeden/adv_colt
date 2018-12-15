          /*--------------------------------------------------------*
           *                                                        *
           *                     Array Methods                      *
           *                                                        *
           *                                                        *
           *                                                        *
           *--------------------------------------------------------*/

[1,2,3].forEach(function(value, index, array) {
  // the callback function will be executed 3 times since there are
  // 3 values in the array
})

const arr = [1,2,3];

arr.forEach(function(val, idx, arr){
  console.log("---------------------")
  console.log(val, idx, arr);
  console.log("---------------------")
})

function forEach2(array, callback) {
  for(let i = 0; i < array.length; i++) {
    callback(array[1], i, array);
  }
}

function halfValues(arr) {
  var newArr = [];
  arr.forEach(function(val){
    newArr.push(val /2);
  })
  return newArr;
}

var res = halfValues([12,14,16]);
console.log(res);

function vowelCount(str){
  str = str.toLowerCase();
  let string = str.split('');
  let vowels = ['a','e','i','o','u'];
  const dict = {};
  string.forEach(function(value) {
    if(vowels.indexOf(value) >= 0) {
      if(dict[value] >= 1) {
        dict[value]++;
      } 
      else {
        dict[value] = 1;
      }
    }
  });
  return dict;
}

res = vowelCount('Ellie');
console.log(res);

// --------------------------------------- //
//                MAP
// --------------------------------------- //

arr.map(function(value, index, array) {
  return value * 2;
});

function myMap(array, callback) {
  var newArr = [];
  for(var i = 0; i < array.length; i++) {
    newArr.push(callback(array[i], i, array));
  }
  return newArr;
}

function double(x) { return x*2; }

res = myMap(arr, double);
console.log(res);

function tripleValues(arr) {
  return arr.map(function(value) {
    return value * 3;
  });
}

function printMap(arr) {
  return arr.map((v, i, a) => {
    console.log('---------------')
    console.log(v, i, a);
    console.log('---------------')
  });
}

res = tripleValues(arr);
console.log(res);

res = printMap(arr);


// --------------------------------------- //
//                FILTER
// --------------------------------------- //


function myFilter(arr, callback) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      newArr = [...newArr, arr[i]];
    }
  }
  return newArr;
}

function isTwo(x) { if (x === 2) { return true; } }
function lessThree(x) { if (x < 3) { return true; } }

res = myFilter(arr, isTwo);
console.log(res);

res = myFilter(arr, lessThree);
console.log(res);

function onlyFourLetterNames(arr) {
  return arr.filter(val => val.length === 4);
}

const names = ['Rusty', 'Matt', 'Moxie', 'Colt'];
console.log(onlyFourLetterNames(names));

function findInObj(arr, key, searchValue){
    return arr.filter(val => {
        if (val[key] === searchValue) {
            return searchValue;
        }
    })
}

function findInArr(arr, searchValue){
    return arr.filter(val => val === searchValue)[0];
}

res = findInArr([1, 2, 2, 3], 2);
console.log(res);

function removeVowels(str) {
  let string = str.toLowerCase().split('');
  let vowels = 'aeiou';
  return string.filter(val => vowels.indexOf(val) === -1);
}

console.log(removeVowels('hello'));

function doubleoddNumbers(arr) {
  return arr.filter(val => val%2 !== 0).map(val => val*2);
}


// --------------------------------------- //
//                SOME
// --------------------------------------- //

let x = arr.some(function(value, index, array) {
  return value < 2;
})

console.log(x);

function mySome(array, callback) {
  for(var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true
    }
  }
  return false;
}


console.log(mySome(arr, isTwo));
