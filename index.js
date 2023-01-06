let x;
let y;
let z;

document.getElementById("submitButton").onclick = function(){

    x = document.getElementById('aTextBox').value;
    x = Number(x);

    y = document.getElementById('bTextBox').value;
    y = Number(y);

    z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    document.getElementById('clabel').innerHTML = "Side C: " + z;
}

let a;
let b;
let A;
let B;

document.getElementById("submitButton1").onclick = function(){
    A = document.getElementById('aTextBox1').value;
    A = Number(A);
    
    a = document.getElementById('aTextBox2').value;
    a = Number(a);

    B = document.getElementById('aTextBox3').value;
    B = Number(B);

    b = (a * (Math.sin(B)))/(Math.sin(A))

    document.getElementById('labeli').innerHTML = "Side b: " + b;
}
