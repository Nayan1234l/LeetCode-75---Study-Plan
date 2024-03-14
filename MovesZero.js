/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let NotZero = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== 0){
            nums[NotZero] = nums[i]
            NotZero++
        }
        
    }
    for(let i=NotZero;i<nums.length;i++){
            nums[i] = 0
        }
    return nums
};