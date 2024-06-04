/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
// ---------------------------Q1---------------------------------------
    function tellFortune(job, location, partner, numOfkids){
        return `You will be a ${job} in ${location}, and married to ${partner} with ${numOfkids} kids.`;
    }
    let a = tellFortune("Full-Stack Web developer", "Amman", "Nour", 2 );
    console.log(a);

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
//-----------------------------Q2------------------------------------
    function calculateDogAge(NN){
        NN *= 7;
        return `Your doggie is ${NN} years old in dog years!`; 
    }
    let dogOld = calculateDogAge(prompt("enter the human year"));
    console.log(dogOld);


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
// -----------------------------Q3-------------------------------------
    function calculateSupply(age, amoutPerDay){
        let maxAge = 100;
        let need = (maxAge - age)*(amoutPerDay*365);
        console.log("You will need "+ need + "cups of tea to last you until the ripe old age of " + maxAge );
    }
    calculateSupply(25, 4);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
// ------------------------------Q4------------------------------------
    function greet(name){
        return "hello "+ name;
    }
    let b = greet(prompt("enter yourname"));
    window.alert(b);


//5 what is the error:
//------------------------------Q5--------------------------------------
// function double(cat) {
//   return 2 * x;
// }
        //solution:
        function double(cat) {
            let x = cat;
            return 2 * x;
        }
        console.log(double(4));
        // hint : the x is not defind so declare x 


// function double(7) {
//     return 2 * 7;
//   }
        //solutiion:
        function double(x) {
        return 2 * 7;
        }
        //hint : error messeage (Identifier expected) the parameter must be a variableName not value

// function double('7') {
//   return 2 * 'x';
// }    
        //solution:
        function double(x) {
            return 2 * '7';
        }
        console.log(double(5));
        //hint : error messeage (Identifier expected) the parameter must be a variableName not value and change the 'x' in return to 'number' to return value not NaN



/*
6 
fix these functions:
func double1(x {
  return 2 * x ;
} */
// ---------------------------------Q6----------------------------------
        //solution:
        function double1(x){
            return 2 * x ;
        }
/*
functiondouble2 x)
return 2 * x;
}*/
        //soultion:
        function double2(x){
            return 2 * x;
        }
/*
function (x) double3 {
  return 2 * x;
*/
        //solution:
        function double3(x){
            return 2 * x;
        }


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
//---------------------------------Q7----------------------------------
        function cube(c){
            let u = c * c * c ;
            return u;
        }
        let u = cube(5);
        console.log(u);



/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers
... (293 lines left)
*/
//----------------------------------Q8---------------------------------
        function multiply(x, y){
            console.log(x*y);
        }
        multiply(4,7);
        multiply(2,8);

