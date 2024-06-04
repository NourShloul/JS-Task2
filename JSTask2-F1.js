/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
    let int1 = prompt("enter the first integer");
    let int2 = prompt("enter the last integer");
    if(int1 > int2){
        window.alert(int1);
    } else {
        window.alert(int2);
    }
 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
    let arr = [];
    arr[0]= prompt("enter the first number");
    arr[1]=prompt("enter the second number");
    arr[2]=prompt("enter the third number");
    for(let i=0; i< arr.length; i++){
        if(arr[i] < 0) {
            window.alert("the sign is -");
        } else {
            window.alert("the sign is +");
        }
    }

 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
    let a = prompt("enter the 1st num");
    let b =prompt("enter the 2nd num");
    let c =prompt("enter the 3rd num");
    if (a > b && a > c) {
        if (b > c) {
            window.alert(a + ", " + b + ", " + c);
        } else {
            window.alert(a + ", " + c + ", " + b);
        }
    } else if (b > a && b > c) {
        if (a > c) {
            window.alert(b + ", " + a + ", " + c);
        } else {
            window.alert(b + ", " + c + ", " + a);
        }
    } else if (c > a && c > b) {
        if (a > b) {
            window.alert(c + ", " + a + ", " + b);
        } else {
            window.alert(c + ", " + b + ", " + a);
        }
    } 
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
    let array = [];
    array[0]=Number(prompt("enter the first number"));
    array[1]=Number(prompt("enter the second number"));
    array[2]=Number(prompt("enter the third number"));
    array[3]=Number(prompt("enter the fourth number"));
    array[4]=Number(prompt("enter the last number"));
    let maxx = array[0];
    for (let i = 0; i < array.length; i++) {
        if (maxx < array[i]) {
            maxx = array[i];
        }
    } window.alert(maxx);
 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
    let x = prompt("enter the x value :");
    let y = prompt("enter the y value :");
    if (x > y ){
    window.alert("Hello World");
    }else {
    window.alert("Goodbye");
    }
 /******* End Your Code ********* */