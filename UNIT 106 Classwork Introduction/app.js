function exc1(){
    //print the nums from 0 to 20
    let num = 0;
    let num2 = 21;
    let zerotoTwenty = 0;

    for(let i = 0; num < num2; i++){
        console.log(zerotoTwenty + 1)
    }
}

function sayHello(){
    console.log("Hello, I am Nick")

    
}

function second(){
    console.log("I'm just a test :)");
}

function helloStranger(name){
    console.log("Hello" + name);
}


//instructions
function init(){
    sayHello();

    let name = "Homer";
    helloStranger(name);
}

exc1();

//be notified when the browswe finshes 
//rendering all the html
window.onload = init;