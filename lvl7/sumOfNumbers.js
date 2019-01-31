/*
Given two integers a and b, which can be positive or negative, 
find the sum of all the numbers between including them too and return it. 
If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

function getSum( a,b )
{
if ( a == b ) {
  return a
  } else {
    let difference = Math.abs( a - b )
    let arr = []
    

    for (let i = 0; i <= difference; i++) {
      arr.push(0)
      }

      if ( a < b ) {
        arr[0] =  a
      } else {
        arr[0] = b
      }

    for ( let el = 1; el < arr.length ; el++) {
      arr[el] = arr[el-1] + 1
    }
    
    let sum = arr.reduce((acc, curr) => acc + curr)
    return sum
    }  
  
}

getSum( -1,2 )

