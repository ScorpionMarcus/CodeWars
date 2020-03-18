var isPP = function(n){
    let m = 2,
        k = 2,
        max = Math.floor(n / 2);

    while (m <= max) {
        k = 2;
        while(Math.pow(m, k) <= n) {
            if ( n === Math.pow(m, k)) {
                return [m, k];
            }
            else {
                k++;
            }
        }
        m++;
    }
    return null;
}

console.log( isPP( 4 ) );
console.log( isPP( 9 ) );
console.log( isPP( 5 ) );

// A perfect k is a classification of positive integers:

// In mathematics, a perfect k is a positive integer that can be expressed as an integer k of another positive integer. More formally, n is a perfect k if there exist natural mbers m > 1, and k > 1 such that mk = n.

// Your task is to check wheter a given integer is a perfect k. If it is a perfect k, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

// Note: For a perfect k, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a mber is a perfect k, return any pair that proves it.

// Examples
// Test.describe("perfect ks", function(){
//   Test.it("should work for some examples",function(){
//     Test.assertSimilar(isPP(4), [2,2], "4 = 2^2");
//     Test.assertSimilar(isPP(9), [3,2], "9 = 3^2");
//     Test.assertEquals( isPP(5), null, "5 isn't a perfect mber");
//   });
// });