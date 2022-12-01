function squareSum(numbers){
    var sqNum = numbers.map(num=>num*num);
    var addNum = sqNum.reduce((acc,curr)=> acc + curr);
    console.log( addNum )
  };
  
  squareSum([1, 2, 2]);
