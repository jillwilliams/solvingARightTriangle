const solveForC = ( ) => {
    var a = document.getElementById("myA").value;
    var b = document.getElementById("myB").value;

// SOLVE FOR EACH SIDE OF THE TRIANGLE USING THE PYTHAGOREAN
// THEOREM: a^2 + b^2 = c^2
// SOLVE FOR THE HYPOTENUSE GIVEN SIDES A AND B
    if (a != 0 && b != 0) {
        var calculation = (Math.sqrt(a*a + b*b));
        var answer = calculation.toFixed(4);
            return answer;
    } else
        return;
}
document.getElementById("c").innerHTML = solveForC( );
  
// SOLVE FOR A, GIVEN THE VALUES OF B AND C 
const solveForA = ( ) => {
    if (b != 0 && c != 0) {
        var calculation = (Math.sqrt(c*c - b*b));   
        var answer = calculation.toFixed(4);    
            return answer;
    } else 
        return;
}
document.getElementById("a").innerHTML = solveForA( );

// SOLVE FOR SIDE B GIVEN THE VALUES OF A AND C 
const solveForB = ( ) => {
    if (a != 0 && c != 0) {
        return (Math.sqrt(c*c - a*a));
    } else
        return;
}
document.getElementById("b").innerHTML = solveForA( );
    
// ****END OF SOLVING FOR THE TRIANGLE'S SIDE LENGTHS*****

// SOLVE FOR SIDE LENGTHS GIVEN ONE SIDE LENGTH and ONE ANGLE MEASURE 
// SOH-CAH-TOA: SIN = OPP/HYP  COS = ADJ/HYP  TAN = OPP/ADJ
const solveGivenSideOneandAlpha = ( ) => {
    var a = document.getElementById("myA").value;
    var b = document.getElementById("myB").value;
    var c = document.getElementById("myC").value;
    var alpha1 = document.getElementById("myAlpha").value;
    var alpha = alpha1*(Math.PI/180);
// GIVEN ONE SIDE AND ANGLE ALPHA, solve for c
    if (a != 0 && alpha != 0) {
        var calculate = a / Math.sin(alpha);
        var answer = calculate.toFixed(4);
            return (answer);
    } else 
    if (b != 0 && alpha != 0) {
        var calculate = b / Math.cos(alpha);
        var answer = calculate.toFixed(4);
            return (answer);
    } else 
    if (c === myC) {
        return c;
    } else 
        return;
}
document.getElementById("c").innerHTML = solveGivenSideOneandAlpha( );

const solveGivenSideTwoandAlpha = ( ) => {
    var a = document.getElementById("myA").value;
    var b = document.getElementById("myB").value;
    var c = document.getElementById("myC").value;
    var alpha1 = document.getElementById("myAlpha").value;
    var alpha = alpha1*(Math.PI/180);
    // GIVEN ONE SIDE AND ANGLE ALPHA, solve for a
if (b != 0 && alpha != 0) {
    var calculate = (b*(Math.tan(alpha)));
    var answer = calculate.toFixed(4);
        return (answer);
} else 
if (c != 0 && alpha != 0) {
    var calculate = (c*(Math.cos(alpha)));
    var answer = calculate.toFixed(4);
        return (answer);
} else 
if (a === myA) {
    return a;
} else 
    return;
}
document.getElementById("a").innerHTML = solveGivenSideTwoandAlpha( );

// GIVEN ONE SIDE AND ANGLE ALPHA, solve for b
const solveGivenSideThreeandAlpha = ( ) => {
    var a = document.getElementById("myA").value;
    var b = document.getElementById("myB").value;
    var c = document.getElementById("myC").value;
    var alpha1 = document.getElementById("myAlpha").value;
    var alpha = alpha1*(Math.PI/180);

    if (a != 0 && alpha != 0) {
        var calculate = (a*(Math.tan(alpha)));
        var answer = calculate.toFixed(4);
            return (answer);
    } else 
    if (c != 0 && alpha != 0) {
        var calculate = (c*(Math.cos(alpha)));
        var answer = calculate.toFixed(4);
            return (answer);
    } else
    if (b === myB) {
        return b;
    } else 
        return;
}
document.getElementById("b").innerHTML = solveGivenSideThreeandAlpha( );
// *****END OF SECTION***** 

// SOLVE FOR ONE ANGLE GIVEN THE OTHER ANGLE (ALPHA OR BETA)
const solveGivenAlpha = ( ) => {
    var alpha = document.getElementById("myAlpha").value;

    if (alpha != 0) {
        var calculate = 180 - 90 - alpha;
        var answer = calculate;
            return (answer);
    } else 
        return;
}
document.getElementById("beta").innerHTML = solveGivenAlpha( );

const solveGivenBeta = ( ) => {
    var beta1 = document.getElementById("myBeta").value;
    var beta = beta1*(Math.PI/180);
    if (beta != 0) {
        var calculate = 180 - 90 - beta;
        var answer = calculate;
            return (answer);
    } else 
        return;
}
document.getElementById("alpha").innerHTML = solveGivenBeta( );
// *****END OF SECTION******   
    
// SOLVE FOR ANGLE BETA GIVEN TWO SIDE LENGTHS   
const solveForBeta = ( ) => {
    var a = document.getElementById("myA").value;
    var b = document.getElementById("myB").value;
    var c = document.getElementById("myC").value;

    if (b != 0 && c != 0) {
        var calculate = ((Math.asin(b/c))*180/Math.PI);
        var answer = calculate.toFixed(4);
            return (answer);
    } else 
    if (a != 0 && c != 0) {
        var calculate = ((Math.acos(a/c))*180/Math.PI);
        var answer = calculate.toFixed(4);
            return (answer);
    } else
    if (a != 0 && b != 0) {
        var calculate = ((Math.atan(b/a))*180/Math.PI);
        var answer = calculate.toFixed(4);
            return (answer);
    } else
        return;
}
document.getElementById("beta").innerHTML = solveForBeta( );
// *****END OF SECTION*****
// SOLVE FOR ALPHA GIVEN 2 SIDE LENGTHS
const solveForAlpha = ( ) => {
    var a = document.getElementById("myA").value;
    var b = document.getElementById("myB").value;
    var c = document.getElementById("myC").value;

    if (a != 0 && c != 0) {
        var calculate = ((Math.asin(a/c))*180/Math.PI);
        var answer = calculate.toFixed(4);
            return (answer);
    } else 
    if (b != 0 && c != 0) {
        var calculate = ((Math.acos(b/c))*180/Math.PI);
        var answer = calculate.toFixed(4);
            return (answer);
    } else
    if (a != 0 && b != 0) {
        var calculate = ((Math.atan(a/b))*180/Math.PI);
        var answer = calculate.toFixed(4);
            return (answer);
    } else
        return;
}
document.getElementById("alpha").innerHTML = solveForAlpha( );