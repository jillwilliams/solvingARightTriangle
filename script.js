const solveTriangle = ( ) => {
  var a = document.getElementById("myA").value;
  var b = document.getElementById("myB").value;
  var c = document.getElementById("myC").value;
  var alphaInitial = document.getElementById("myAlpha").value;
  var alpha = alphaInitial*Math.PI*180;
  var betaInitial = document.getElementById("myBeta").value;
  var beta = betaInitial*Math.PI*180;
// SOLVE FOR ALL 3 SIDES GIVEN 2 SIDES
  if (a != 0 && b != 0) {
    var calculate = Math.atan(a/b);
    var answer4 = calculate.toFixed(4);
      return answer4;
  } else
  if (a != 0 && c != 0) {
    var calculate = Math.asin(a/c);
    var answer4 = calculate.toFixed(4);
      return answer4;
  } else
  if (a != 0 && c != 0) {
    var calculate = Math.asin(a/c);
    var answer4 = calculate.toFixed(4);
      return answer4;
  } else
  if (b != 0 && c != 0) {
    var calculate = Math.acos(b/c);
    var answer4 = calculate.toFixed(4);
      return answer4;
  } else
  if (a != 0 && b != 0) {
    var calculate = Math.atan(b/a);
    var answer5 = calculate.toFixed(4);
      return answer5;
  } else
  if (a != 0 && c != 0) {
    var calculate = Math.acos(a/c);
    var answer5 = calculate.toFixed(4);
      return answer5;
  } else
  if (a != 0 && c != 0) {
    var calculate = Math.asin(a/c);
    var answer4 = calculate.toFixed(4);
      return answer4;
  } else
  if (b != 0 && c != 0) {
    var calculate = Math.asin(b/c);
    var answer4 = calculate.toFixed(4);
      return answer4;
  } else
// *****SOLVE GIVEN ONE SIDE AND ANGLE BETA*****
  if (a != 0 && beta != 0) {
    var calculate = a/(Math.cos(beta));
    var answer3 = calculate.toFixed(4);
      return answer3;
  } else
  if (a != 0 && beta != 0) {
    var calculate = a*Math.tan(beta);
    var answer2 = calculate.toFixed(4);
      return answer2;
  } else
  if (b != 0 && beta != 0) {
    var calculate = b/(Math.sin(beta));
    var answer3 = calculate.toFixed(4);
      return answer3;
  } else
  if (b != 0 && beta != 0) {
    var calculate = b/(Math.tan(beta));
    var answer1 = calculate.toFixed(4);
      return answer1;
  } else
  if (c != 0 && beta != 0) {
    var calculate = c*(Math.sin(beta));
    var answer2 = calculate.toFixed(4);
      return answer2;
  } else
  if (c != 0 && beta != 0) {
    var calculate = c*(Math.cos(beta));
    var answer1 = calculate.toFixed(4);
      return answer1;
  } else
// ****SOLVE GIVEN 1 SIDE AND ANGLE ALPHA*****
  if (a != 0 && alpha != 0) {
    var calculate = a/(Math.sin(alpha));
    var answer3 = calculate.toFixed(4);
      return answer3;
  } else
  if (a != 0 && alpha != 0) {
    var calculate = a/(Math.tan(alpha));
    var answer2 = calculate.toFixed(4);
      return answer2;
  } else
  if (b != 0 && alpha != 0) {
    var calculate = b/(Math.cos(alpha));
    var answer3 = calculate.toFixed(4);
      return answer3;
  } else
  if (b != 0 && alpha != 0) {
    var calculate = b*(Math.tan(alpha));
    var answer1 = calculate.toFixed(4);
      return answer1;
  } else
  if (c != 0 && alpha != 0) {
    var calculate = a/(Math.sin(alpha));
    var answer3 = calculate.toFixed(4);
      return answer3;
  } else
  if (c != 0 && alpha != 0) {
    var calculate = c*(Math.sin(alpha));
    var answer1 = calculate.toFixed(4);
      return answer1;
  } else
// *****SOLVE FOR ALPHA WHEN GIVEN ONLY 2 SIDE LENGTHS*****
  if (a != 0 && b != 0) {
    var calculate = Math.atan(a/b);
    var answer4 = calculate.toFixed(4);
      return answer4;
  } else
  if (a != 0 && c != 0) {
    var calculate = Math.asin(a/c);
    var answer4 = calculate.toFixed(4);
      return answer4;
  } else
  if (b != 0 && c != 0) {
    var calculate = Math.acos(b/c);
    var answer4 = calculate.toFixed(4);
      return answer4;
  } else
// *****SOLVE FOR BETA WHEN GIVEN ONLY 2 SIDE LENGTHS*****
  if (a != 0 && b != 0) {
    var calculate = Math.atan(b/a);
    var answer5 = calculate.toFixed(4);
      return answer5;
  } else
  if (a != 0 && c != 0) {
    var calculate = Math.acos(a/c);
    var answer5 = calculate.toFixed(4);
      return answer5;
  } else
  if (b != 0 && c != 0) {
    var calculate = Math.asin(b/c);
    var answer5 = calculate.toFixed(4);
      return answer5;
  } else
    return "Calculation not possible.";
};
const myCalc = ( ) => {
  document.getElementById("z").innerHTML = solveTriangle( );
};



  // document.getElementById("b").innerHTML = answer2;
  // document.getElementById("c").innerHTML = answer3;
  // document.getElementById("alpha").innerHTML = answer4;
  // document.getElementById("beta").innerHTML = answer5;

