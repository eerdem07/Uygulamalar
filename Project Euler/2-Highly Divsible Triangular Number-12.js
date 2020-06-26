var number=0;
var n=1;
while(number===0){

var count=0;
var trinum= (n*(n+1))/2;

for(i=1;i<=Math.sqrt(trinum);i++){
if(trinum%i===0){             
count+=2;                              
}
}

if(count>500){
number=trinum;
break;
}

n+=1;
console.log(count,trinum,n);
}
console.log(number);
