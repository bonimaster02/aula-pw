function Exe1(){
    var Xe1 = parseInt(document.querySelector('.ie1').value)
    document.querySelector('.re1').innerHTML = ""
    for( ie1 = 1; ie1 <= 10; ie1++ ){
        var resultadoe1 = Xe1 * ie1;
        document.querySelector('.re1').innerHTML += `${Xe1} * ${ie1} = ${resultadoe1}<br>`
    }
}



function Exe2(){
    var Xe2 = parseInt(document.querySelector('.ie2').value)
    if(Xe2 == 0){
        document.querySelector('.re2').innerHTML = "nulo"
    } else if(Xe2 % 2 == 0) {
        document.querySelector('.re2').innerHTML = "par"
    } else{
        document.querySelector('.re2').innerHTML = "ímpar"
    }

}



function Exe3(){
    var Xe3 = parseInt(document.querySelector('.ie3').value)
    if( Xe3 == 2){
        document.querySelector('.re3').innerHTML = "S"
    } else if( Xe3 <= 1){
        document.querySelector('.re3').innerHTML = "N"
    } else{
        for( ie3 = 2; ie3 < Xe3; ie3++){
            if( Xe3 % ie3 == 0){
                document.querySelector('.re3').innerHTML = "N"
                return
            } else{
                document.querySelector('.re3').innerHTML = "S"
            }
        }
    }
}



function Exe4(){
    var Xe4 = [parseInt(document.querySelector('.ie4_1').value), parseInt(document.querySelector('.ie4_2').value), parseInt(document.querySelector('.ie4_3').value)]
    Xe4.sort((a, b) => a - b);     
    document.querySelector('.re4').innerHTML = Xe4
}



function Exe5(){
    var Xe5 = parseInt(document.querySelector('.ie5_1').value)
    var Ye5 = parseInt(document.querySelector('.ie5_2').value)
    var Ze5 = parseInt(document.querySelector('.ie5_3').value)
    var We5 = Xe5 - (Ye5 + Ze5)
    var Ve5 = [Ye5, Ze5, We5]
    Ve5.sort((a, b) => b - a)
    document.querySelector(".re5").innerHTML = Ve5


}