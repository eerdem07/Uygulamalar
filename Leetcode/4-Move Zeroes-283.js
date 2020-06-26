var moveZeroes = function(nums) {
    let nonzero = 0;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) continue;
        nums[nonzero] = nums[i];
        if (i !== nonzero) nums[i] = 0;
        nonzero++;
    }
};
