let random = Math.random();
console.log(random);

let a = prompt("Enter the first number")
let b = prompt("Enter the Operation")
let c = prompt("Enter the Second number")

// let obj = {
//     "+" : "-",
//     "*" : "+",
//     "-" : "/",
//     "/" : "**",
//     "**" : "-",   
// }

if ( random > 0.5) {
    //Perform Incorrect Operation
    if (b == "+") { 
        alert(a-c);
}
    else if (b == "*") { 
        alert(a+c);
}
    else if (b == "-") { 
        alert(a/c);
}
    else if (b == "/") { 
        alert(a**c);
}
    else if (b == "**") { 
        alert(a-c);
}
}
else {
    //Perform Correct Operation
    if (b == "+") { 
        alert(a+c);
    }
    else if (b == "-") { 
        alert(a-c);
    }
    else if (b == "*") { 
        alert(a*c);
    }
    else if (b == "/") { 
        alert(a/c);
    }
    else if (b == "**") { 
        alert(a**c);
    }
}