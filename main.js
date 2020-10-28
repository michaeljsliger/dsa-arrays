const Array = require('./Array');

const arr = new Array();
function main() {
    console.log('hello');

    arr.push(1);

    console.log(arr.get(0));
    arr.push('tauhida');
    console.log(arr.get(1));
    // more space for the string needs to be allocated?
    // Float64Array
    arr.push(1110);
    console.log(arr.get(2));
    console.log(arr);
}

// main();

// 5
function URLify(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            str = str.slice(0, i) + '%20' + str.slice(i + 1, str.length);
        }
    }
    return str;
}

// console.log(URLify('tauhida parveen'));
// console.log(URLify('www.thinkful.com /tauh ida parv een'));

// 6
function filterLessThan5(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 5) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

// console.log(filterLessThan5([6, 7, 4, 3, 8, 10]));


// 7 max sum in array
function maxSum(arr) {
    // two pointers for O(n);
    let maxSoFar = 0;
    let maxEndingHere = 0;
    for (let i = 0; i < arr.length; i++) {
        maxEndingHere = maxEndingHere + arr[i];
        if (maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere;
        }
        if (maxEndingHere < 0) {
            maxEndingHere = 0;
        }
    }

    return maxSoFar;
}

// console.log(maxSum([-1, 4, 6, -3, 5, -2, 1]));

// 8 merge two arrays
function mergeTwoArrays(arr1, arr2) {
    // while (i < arr1.length + arr2.length)
    // check arr[i] 
    let retArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            retArr.push(arr1[i]);
            i++;
        } else {
            retArr.push(arr2[j]);
            j++;
        } 
    }

    // REMAINING of 2nd array
    if (j < arr2.length) {
        i = j;
        arr1 = arr2;
    }
    while (i < arr1.length) {
        retArr.push(arr1[i]);
        i++;
    }
    // if (!retArr.includes(arr1[arr1.length - 1])) {
    //     retArr.push(arr1[arr1.length - 1]);
    // }
    // if (!retArr.includes(arr2[arr2.length - 1])) {
    //     retArr.push(arr2[arr2.length - 1]);
    // }

    return retArr;
}

console.log(mergeTwoArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10, 12]));
console.log(mergeTwoArrays([2,3], [1, 3, 4, 7]));
console.log(mergeTwoArrays([1], [1, 3, 4, 7]));
console.log(mergeTwoArrays([2, 5, 7], [1, 3, 4, 7]));
console.log(mergeTwoArrays([1, 3, 4, 7], [2, 5, 9]));

function removeChars(str, remove) {
    const regex = new RegExp(`^[${remove}]`, 'gi');
    if (str.length === 0) {
        return '';
    }


    return str[0].replace(regex, '') + removeChars(str.slice(1), remove);
    // return str.replace(regex, '')
}

// ^^^^^^^^^^^^^^^^^^
// iterative removeChars
function iterativeChars(str1, str2) {
    let returnStr = '';
    for (let i = 0; i < str1.length; i++) {
        let flag = false;
        for (let j = 0; j < str2.length; j++) {
            if (str1[i].toLowerCase() === str2[j]) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            returnStr += str1[i];
        }
    }
    return returnStr;
}

// console.log(iterativeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

function removeChars1(str, removeStr) {
    return str.replace(/[aeiou]/gi, '');
}

// console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// 10  products
function products(array) {
    return array.map((el, index) => {
        let prod = 1;
        for (let i = 0; i < array.length; i++) {
            if (i !== index) {
                prod *= array[i];
            }
        }
        return prod;
    });
}

// console.log(products([1, 3, 9, 4]));
// O(n^2), can this be done faster?


// 11 2D array
function arrayTo0(array) {
    let verts = []; // array of vertical indices
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 0) {
                // need new vert indices before array gets changed
                verts.push(j);
            }
        }
    }
/////////////////////////////
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(0)) {
            array[i].fill(0);
            continue;
            // horizontal power play
        }
        for (let j = 0; j < array[i].length; j++) {
            // check vert and fill in j
            if (verts.includes(j)) {
                array[i][j] = 0;
            }
        }
    }

    return array;
}
// O(n^2) solution?
const matrix1 = [
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
];
const matrix2 = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1],
];
// console.log(arrayTo0(matrix1));





// 12 String Rotation
function checkRotation(str, str2) {
    const compArr = [];
    const compStr = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            compArr.push(str);
        } else {
            compStr.unshift(compStr.pop());

            compArr.push(compStr.join(''));
        }
    }
    return compArr.includes(str2);
}
// console.log(checkRotation('amazon', 'onamaz'));
// console.log(checkRotation('maize', 'maizez'));
// maze
// emaz
// zema
// azem


