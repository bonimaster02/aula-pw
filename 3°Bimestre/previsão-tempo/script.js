    let chave = "a5b0284e0a593eb1a4212623a4844265";

const clique = () => {
    let cidade = document.querySelector(".input-cidade").value

   // !cidade ? alert("Inserir o nome da cidade") : buscarCidade(cidade) 
   
    if(!cidade){
        alert("Inserir o nome da cidade");
    }else{
         buscarCidade(cidade);
    }
}

//https://api.openweathermap.org/data/2.5/weather?q=    {city name}&appid={API key}

const buscarCidade = async (cidade) => {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+
        cidade +
        "&appid=" +
        chave + 
        "&lang=pt_br" +
        "&units=metric")
    .then(res => res.json())
    console.log(dados);
    colocaNaTela(dados);
}

    const colocaNaTela = (dados) => {
        document.querySelector(".nome-cidade").innerHTML = dados.name;
        document.querySelector(".nome-temp").innerHTML = dados.main.temp;
        document.querySelector(".nome-descricao").innerHTML = dados.weather[0].description;
        document.querySelector(".nome-umidade").innerHTML = dados.main.humidity;
        document.querySelector(".img").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
    }
    // quando for array = w[0]