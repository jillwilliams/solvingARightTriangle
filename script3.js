const myProblem = () => {
    var a = document.getElementById("myA").value;
    var b = document.getElementById("myB").value;
    var c = document.getElementById("myC").value;
    if (a != 0 && b != 0) {
        var answer = Math.sqrt(a*a + b*b);
        return answer.toFixed(1);
    } 
};
const myCalcc = () => {
    document.getElementById("c").innerHTML = myProblem();
}

const myProblem2 = () => {
    var a = document.getElementById("myA").value;
    var c = document.getElementById("myC").value;
    if (a != 0 && c != 0) {
        var answer2 = Math.sqrt(c*c - a*a);
        return answer2.toFixed(1);
    }
};
const myCalcb = () => {
    document.getElementById("b").innerHTML = myProblem2();
}

const myProblem3 = () => {
    var b = document.getElementById("myB").value;
    var c = document.getElementById("myC").value;
    if (b != 0 && c != 0) {
        var answer3 = Math.sqrt(c*c - b*b);
        return answer3.toFixed(1);
    }
};
const myCalca = () => {
    document.getElementById("a").innerHTML = myProblem3();
}
///////////////////////////////////////////////////
const myProblem4 = () => {
    var alpha = document.getElementById("myAlpha").value;
    if (alpha != 0) {
        return 90 - alpha;
    }
};
const myCalcbeta = () => {
    document.getElementById("beta").innerHTML = myProblem4();
}

const myProblem5 = () => {
    var beta = document.getElementById("myBeta").value;
    if (beta != 0) {
        return 90 - beta;
    }
};
const myCalcalpha = () => {
    document.getElementById("alpha").innerHTML = myProblem5();
}
//////////////////////////////
