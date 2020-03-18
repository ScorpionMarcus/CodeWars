function differenceInAges(ages){
    return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
}

var arr = [82, 15, 6, 38, 35];

console.log(differenceInAges(arr));