var bigNumber = {};
bigNumber.createFromNumber = function(number){
    var bigNum = [number];
    bigNumber.rebalanceDigitArray(bigNum);
    return bigNum;
};
bigNumber.rebalanceDigitArray = function(digits, index){
    index = index || 0;
    var digit = digits[index];
    while(digit > 9){
        digits[index] = digit % 10;       
        index++;
        digits[index] = digit = (digits[index] || 0) + ((digit - digit % 10) / 10);
    }
}

var factors = {};
factors.getFactors = function (number){
    var factors = [];
    
    var possibleFactor = 1;
    var sqrt = Math.sqrt(number);
    while(possibleFactor <= sqrt){
        if(number % possibleFactor == 0){
            factors[factors.length] = possibleFactor;
            
            var otherPossibleFactor = number / possibleFactor;
            if(otherPossibleFactor > possibleFactor){
                factors[factors.length] = otherPossibleFactor;
            } 
        }
        possibleFactor++;
    }
    
    return factors;
};

var panDigitalProducts = [];
for(var i = 1; i < 9999; i++){
    
    
    var digits = bigNumber.createFromNumber(i);
    var factorz = factors.getFactors(i);
    
    for(var j = 0, factor1, factor2; factor1 = factorz[j], factor2 = factorz[j+1]; j+=2){
        var digits1 = bigNumber.createFromNumber(factor1);
        var digits2 = bigNumber.createFromNumber(factor2);
        
        if((digits.length + digits1.length + digits2.length) == 9){
            var k = 1;
            for(; k < 10; k++){
                if((digits.indexOf(k) != -1) || (digits1.indexOf(k) != -1) || (digits2.indexOf(k) != -1)){
                    continue;
                }
                
                break;
            }
            
            if(k>=10){
                console.log(factor1 + ' * ' +factor2 + ' = ' + i);
                panDigitalProducts.push(i);
                break;
            }
        }
    }
}

console.log(panDigitalProducts);
panDigitalProductSum = 0;
for(var i = 0, panDigitalProduct; panDigitalProduct = panDigitalProducts[i]; i++){
    panDigitalProductSum += panDigitalProduct;
}
console.log(panDigitalProductSum);
