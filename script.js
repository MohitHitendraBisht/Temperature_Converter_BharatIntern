let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");
let rankine = document.getElementById("rankine");

function celToFar(){
    let output = (parseFloat(celsius.value) * 9/5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farToCel(){
    let output = (parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}

function celToKel(){
    let output = (parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat(output.toFixed(2));
    console.log(output);
} 

function celToRan(){
    let output = (parseFloat(celsius.value) * 9/5) + 491.67;
    rankine.value = parseFloat(output.toFixed(2));
    console.log(output);
} 

function farToKel(){
    let output = ((parseFloat(fahrenheit.value) - 32) * 5/9) + 273.15;
    kelvin.value = parseFloat(output.toFixed(2));
    console.log(output);
}

function farToRan(){
    let output = (parseFloat(fahrenheit.value) + 459.67);
    rankine.value = parseFloat(output.toFixed(2));
    console.log(output);
}

function kelToCel(){
    let output = (parseFloat(kelvin.value) - 273.15);
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}

function kelToFar(){
    let output = ((parseFloat(kelvin.value) - 273.15) * 9/5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
    console.log(output);
}

function kelToRan(){
    let output = (parseFloat(kelvin.value) * 9/5);
    rankine.value = parseFloat(output.toFixed(2));
    console.log(output);
}

function ranToCel(){
    let output = (parseFloat(rankine.value) - 491.67) * 5/9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}

function ranToFar(){
    let output = (parseFloat(rankine.value) - 459.67);
    fahrenheit.value = parseFloat(output.toFixed(2));
    console.log(output);
}

function ranToKel(){
    let output = (parseFloat(rankine.value) * 5/9);
    kelvin.value = parseFloat(output.toFixed(2));
    console.log(output);
}