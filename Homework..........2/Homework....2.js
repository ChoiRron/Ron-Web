//today's weather in kelvin
let kelvin = 293;

//The tempreture of celcius
let celcius = kelvin - 273;

let fahrenheit = celcius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);

console.log("The temparature is " + fahrenheit + "degrees Fahrenheit.")

