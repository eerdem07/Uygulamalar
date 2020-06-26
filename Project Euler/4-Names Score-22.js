var
fs = require('fs');
fs.readFile('./names.txt', function(err, data)
{
    solution(eval("[" + data.toString() + "]"));
});

function solution(data) {

    data.sort((a, b) => (a > b) - (a < b));

    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        sum+= asciiValue(data[i]) * (i + 1);
    }
    return sum;
}
function asciiValue(str) {

    var sum = 0;
    for (var i = str.length; i--; ) {
        sum+= str.charCodeAt(i) - 64;
    }
    return sum;
}
