
symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}


const romanToInt = (s) => {
    value = 0;
    for(let i = 0; i < s.length; i++){
        console.log(s, "👀input string")
        symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
        console.log(symbols[s[i]])
        console.log(symbols[s[i+1]])
        console.log(value -= symbols[s[i]], "current integer is less than next integer" )
        console.log(value += symbols[s[i]], "else" )
    }
    return value
};
console.log(romanToInt("MCMXCVI"))
// console.log(romanToInt("MCMXCIV"))
// console.log(romanToInt(""))




//nums = [-2,1,-3,4,-1,2,1,-5,4]
// function maxSubArray(nums) {
//     if(nums.length === 1){
//         return nums[0];
//     }
//     let maxValue = nums[0];
//     let accNum = nums[0];
    
    
//     for(let i=1; i<=nums.length; i++){
//         let calc = Math.max(nums[i], accNum + nums[i])
//         if (calc > maxValue) 
//             maxValue = calc;
//         accNum = calc       // set accNum as calc so I can iterate through more bigger accNum compared to the previous accNum
//     }
//     return maxValue;

// };

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
// console.log(maxSubArray([1]))
// console.log(maxSubArray([5,4,-1,7,8]))