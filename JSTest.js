// Array function 
var day = dayFunction => { 
 switch(dayFunction.toLowerCase()) {
	case 'monday' :
		console.log('Idali');
	case 'tuesday' :
		console.log('Dosa');
	case 'wednesday' :
		console.log('Utappa');
	case 'thursday' :
		console.log('Poha');
	case 'friday' :
		console.log('Upama');
	case 'saturday' :
		console.log('noodles');
}
}
day('tuesday');



// Sum of the number withinn an array

let array1=[1,2,3]
let sum =0
for(let i =0;i<array1.lenght();i++){
	sum +=array1[i];
}
console.log(sum);



//Write an Arrow Function to Return a Boolean if a number is divisible by 10

var check=num=> num%10 === 0

console.log(check(20)) //true
console.log(check(88)) //false



//Write a code to Remove the spaces found in a string

const string1= "Hello world"
const removeSpace = string1.split(' ').join();
console.log(remoceSpace);


// Write down a nested object to store data of company employees

obj1={
 emp1=[
 {id:1,name:'Shree',city:'Mumbai',contact:{phoneNo:9890986755,Email:'shree@gmail.com'}},
 {id:2,name:'shekhar',city:'thane',contact:{phoneNo:9890986755,Email:'shekhar@gmail.com'}},
 {id:3,name:'shlok',city:'pune',contact:{phoneNo:9890986755,Email:'shlok@gmail.com'}}
]
}


//What is string interpolation and concatenation. Write definition with example.

String interpolation: it is a way of printing string in curly brases 
example:
let s = "Shraddha"
console.log(`Hello there!!! ${s} is here...`)

and String concatination it is way to concatinate two or more string by '+' 
let s1 ='Shraddha'
let s2 = 'Jamakhandi'
var s3 = s1+s2
console.log(s3)


