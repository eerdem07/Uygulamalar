/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let length = A.length;
let hash = {};
let result = [];
A[0].split('').forEach(a=>{
    if (hash[a]) {
        hash[a] += 1;
    } else {
        hash[a] = 1;
    };
});
for (let i = 1; i < length; i++) {
    let tempHash = {};
    A[i].split('').forEach(a=>{
        if (hash[a]) {
            hash[a] -= 1;
            if (tempHash[a]) {
                tempHash[a] += 1;
            } else {
                tempHash[a] = 1;
            };
        };
    });
    hash = tempHash;
};
for (let prop in hash) {
    result = [...result, ...prop.repeat(hash[prop]).split('')];
};
return result;

};
