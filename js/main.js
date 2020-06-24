// variáveis Header e Footer

    var cabecalho = "Consultar CEP"
    var rodape = "Bootcamp Global Fullstack Developer"
    var copyright = "Instrutor Rafael Galleani"

    $("#cabecalho").html(cabecalho);
    $("#rodape").html(rodape);
    $("#copyright").html(copyright);

// Váriáveis e Funções Consultar CEP

    var botaoBuscar = "Buscar"
    $("#botaoBuscar").html(botaoBuscar);

    var botaoLimpar = "Nova Consulta"
    $("#botaoLimpar").html(botaoLimpar);

function consultarCEP(){

    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    var bairro = "Bairro: ";
    var localidade = "Cidade: ";
    var estado = "Estado: ";
    var codigopostal = "CEP: ";

    var mensagem = "Digite um CEP";

    console.log(url);
    
    if ( cep == '' ){
        $("#mensagem").html(mensagem);
    }

    // Requisição Ajax para uma biblioteca JQuery
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#mensagem").hide();
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(bairro + response.bairro);
            $("#localidade").html(localidade + response.localidade);
            $("#uf").html(estado + response.uf);
            $("#codigopostal").html(codigopostal + response.cep);
            $("#botaoLimpar").show();
            $("#botaoBuscar").hide();
            $("#cep").hide();
        }
    })
    
}

function novaConsulta(){
    $("#botaoLimpar").hide();
    $("#botaoBuscar").show();
    $("#cep").show();
    window.location.href="index.html";
}

$(function(){
    $("#botaoLimpar").hide();
    $("#botaoBuscar").show();
    $("#cep").show();
});
