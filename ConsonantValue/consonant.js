function solve(s) {

    // let alpha = 'abcdefghijklmnopqrstuvwxyz';
    // replace each vowel in s with a blank space, then remove redundancies
    let arr = s.slice().replace(/[aeiou]/gi, ' ').replace(/\s+/g, ' ')
    console.log(arr);

    // separate into items in an array

    arr = arr.split(' ');
    console.log(arr);

    // split each item into separate arrays

    arr = arr.map(v => v.split(''));
    console.log(arr);

    arr = arr.map(v => v.charCodeAt() - 96);
    console.log(arr);

    return 0;
};

solve("mischtschenkoana");



//'b'.charCodeAt(0) - 96

// function solve(s) {
//     s=s.toLowerCase();
//     let arr=s.slice().replace(/[aeiuo]/g,' ').replace(/\s+/g,' ');
//     arr=arr.split(' ').map(v=>v.split('').map(v=>v.charCodeAt()-96).reduce((a,b)=>a+b,0))
//     return Math.max(...arr);
// };