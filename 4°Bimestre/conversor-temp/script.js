function Celsius(){

        var C = parseFloat(document.querySelector('.c').value)
        document.querySelector('.k').value = (C + 273.15).toFixed(2)
        document.querySelector('.f').value = ((C * 1.8) + 32).toFixed(2)

}

function Fahrenheit(){

    var F = document.querySelector('.f').value
    document.querySelector('.c').value = (((F - 32) / 1.8)).toFixed(2)
    document.querySelector('.k').value = (((F - 32) / 1.8) + 273.15).toFixed(2)

}

function Kelvin(){

    var K = parseFloat(document.querySelector('.k').value)
    document.querySelector('.c').value = (K - 273.15).toFixed(2)
    document.querySelector('.f').value = (((K - 273.15) * 1.8) + 32).toFixed(2)

}

function Limpar(){

    document.querySelector('.c').value = ""
    document.querySelector('.f').value = ""
    document.querySelector('.k').value = ""
    
}