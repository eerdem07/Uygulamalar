/**
 * @param {number} num
 * @return {number}
 */
let numberOfSteps  = (num, steps = 0) => {
    for (; num; ++steps)
        if (num % 2)
            --num;
        else
            num >>= 1;        
    return steps;
};
