function exibirMensagem() {
    var data = new Date();
    alert(data.toString());
}


var form = document.getElementById('teste');
var campo = document.getElementById('campo');
var docente = document.getElementById('docente');

form.addEventListener('submit', function (e) {
    //Docente a ser inserido
    // docente.value
    //Disciplinas que o docente vai ministrar na turma
    console.log(docente.value + " vai ministrar: " + cbx2())

    insereNosCampos()

    e.preventDefault();
});

//Pego o ID do docente que vou fazer as alterações



function cbx2() {
    var arr = []; /* Cria array com todos os names dos check selecionados */
    $('.check:checked').each(function (item) {
        /* Busca todos os elementos com o class .checked e que possuam um atributo checked. Nesse caso somente radio e checkbox possuem tal atributo */
        arr.push($(this).attr("name")); /* Inclui name do elemento em um array*/
    });
    // alert(arr);
    return arr /* Retorna esse array */ ;
}


var insere_Docente = document.getElementById("Insere_Docente");
var insere_Disciplinas = document.getElementById("Insere_Disciplinas");

function insereNosCampos() {
    console.log(insere_Docente.value.length)
    if (insere_Docente.value.length == 0) {
        insere_Docente.setAttribute('value', docente.value);
    } else {
        insere_Docente.setAttribute('value', insere_Docente.value + " , " + docente.value);
    }

    if (insere_Disciplinas.value.length == 0) {
        console.log("Entrou")
        insere_Disciplinas.setAttribute('value', '[' + cbx2() + ']');
    } else {
        insere_Disciplinas.setAttribute('value', insere_Disciplinas.value + ", [" + cbx2().toString() + "]");
    }

    // insere_Disciplinas.setAttribute('value', cbx2().toString());

}