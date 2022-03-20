let dropdownEscolhas = document.getElementById("dropdown-escolhas")
let tabelaServicos = document.getElementById("servicos")
let tabelaExecucao = document.getElementById("execucao")


tabelaExecucao.style.visibility = "collapse"

function onChange() {
    if(dropdownEscolhas.value == "servicos") {
        tabelaServicos.style.visibility = "visible";
        tabelaExecucao.style.visibility = "collapse";
    } else if (dropdownEscolhas.value == "execucao"){
        tabelaServicos.style.visibility = "collapse";
        tabelaExecucao.style.visibility = "visible";
    } else if (dropdownEscolhas.value == "analise") {
        tabelaServicos.style.visibility = "collapse";
        tabelaExecucao.style.visibility = "collapse";
        tabelaAnalise.style.visibility = "visible";
    } 
}

dropdownEscolhas.addEventListener("change", onChange)

$(function(){
    $("#tabela").keyup(function(){

        let textoPlaceholder  = document.getElementById("pesquisa")
        var index = $(this).parent().index();
        var nth = "#servicos td:nth-child("+(index+1).toString()+")";
        var valor = $(this).val().toUpperCase();
        $(nth).each(function(){
            if($(this).text().toUpperCase().indexOf(valor) < 0){
                $(this).parent().hide();
            } else{
                $(this).parent().show();
            }
        }) 
    })

    $('#tabela').blur(function(){
        $(this).parent().show();
    });

});



$(function(){
    $("#tabela").keyup(function(){

        let textoPlaceholder  = document.getElementById("pesquisa")
        var index = $(this).parent().index();
        var nth = "#execucao td:nth-child("+(index+1).toString()+")";
        var valor = $(this).val().toUpperCase();
        $(nth).each(function(){
            if($(this).text().toUpperCase().indexOf(valor) < 0){
                $(this).parent().hide();
            } else{
                $(this).parent().show();
            }
        }) 
    })

    $('#tabela').blur(function(){
        $(this).parent().show();
    });

});


