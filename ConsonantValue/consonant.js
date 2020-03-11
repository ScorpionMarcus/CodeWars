function solve(s) {

    // let alpha = 'abcdefghijklmnopqrstuvwxyz';
    // replace each vowel in s with a blank space, then remove redundancies
    let arr = s.slice().replace(/[aeiou]/g, ' ').replace(/\s+/g, ' ')
    console.log(arr);

    // separate into items in an array

    arr = arr.split(' ');
    console.log(arr);

    // split each item into separate arrays
    // assign each letter in s to a number using charCodeAt
    // use reduce so that the numbers in each array are added together ie a,b becomes a+b starting at the first position 0

    arr = arr.map(v => v.split('').map(v => v.charCodeAt() - 96).reduce((a, b) => a + b, 0));
    console.log(arr);

    // return the highest number item in the array
    // ...spread operator (all the numbers in arr)

    return Math.max(...arr);
};

console.log(solve("mischtschenkoana"));



// console.log('b'.charCodeAt(0) - 96);