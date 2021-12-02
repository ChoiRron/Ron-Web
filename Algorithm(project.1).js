//question 1
function addition(a,d){
    return a + d
}

console.log(addition(5,7))


//question 2
function circle(c){
    return 3.14 * c * c
}

console.log(circle(3.14,4))



//question 3
function lessThan(l,t){
    return (l + t) < 100 
}

console.log(lessThan(30,65))



//question4
function leapYear(y){
    return y % 4 === 0
}

console.log(leapYear(1968))



//question 5
function ten(x,l){
    if (x === 10) {
        return true
    } else if (l === 10) {
        return true
    } else if (x + l === 10) {
        return true
    }  else {
        return false
    }
}

console.log(ten(3,10))