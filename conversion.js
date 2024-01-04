function radian_to_Degree(radians){
    return (radians*(180/Math.PI)).toFixed(2);
    }

 let radians = parseFloat(prompt("Enter a temperature(radian): "));
 let degrees = radian_to_Degree(radians);

document.getElementById("demo").innerHTML = "The conversion(radian to degree) is = "+" "+degrees+" "+"degree.";