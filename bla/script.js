function clicka(){
    var HW = document.querySelector('.i1000').value;
    document.querySelector('.r1000').innerHTML = HW
}

function clickb(){
    var aa = parseInt(document.querySelector('.i1001a').value);
    var bb = parseInt(document.querySelector('.i1001b').value);
    document.querySelector('.r1001').innerHTML = aa + bb
}

function clickc(){
    var raio = parseFloat(document.querySelector('.i1002').value);
    document.querySelector('.r1002').innerHTML = ((raio*raio) * Math.PI).toFixed(4)
}

function clickd(){
    var a = parseInt(document.querySelector('.i1003a').value);
    var b = parseInt(document.querySelector('.i1003b').value);
    document.querySelector('.r1003').innerHTML = a + b
}

function clicke(){
    var A = parseInt(document.querySelector('.i1004a').value);
    var B = parseInt(document.querySelector('.i1004b').value);
    document.querySelector('.r1004').innerHTML = A * B
}