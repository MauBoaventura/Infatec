//Insere elementos da Model Docente_Disciplina 

var vincula_disciplinas = document.getElementById('vincula_disciplinas');

vincula_disciplinas.addEventListener('submit', function (e) {
    insereNosCampos()
    e.preventDefault();
});

function cbx_Docente_Disciplina() {
    var arr = []; /* Cria array com todos os names dos check selecionados */
    $('.check:checked').each(function (item) {
        /* Busca todos os elementos com o class .checked e que possuam um atributo checked. Nesse caso somente radio e checkbox possuem tal atributo */
        arr.push($(this).attr("name")); /* Inclui name do elemento em um array*/
    });
    return arr /* Retorna esse array */ ;
}

var docente = document.getElementById('docente');
var insere_Docente = document.getElementById("Insere_Docente");
var insere_Disciplinas = document.getElementById("Insere_Disciplinas");

function insereNosCampos() {
    console.log(insere_Docente.value.length)
    if (insere_Docente.value.length == 0) {
        insere_Docente.setAttribute('value', docente.value);
    } else {
        insere_Docente.setAttribute('value', insere_Docente.value + ";" + docente.value);
    }

    if (insere_Disciplinas.value.length == 0) {
        console.log("Entrou")
        insere_Disciplinas.setAttribute('value', '[' + cbx_Docente_Disciplina() + ']');
    } else {
        insere_Disciplinas.setAttribute('value', insere_Disciplinas.value + ";[" + cbx_Docente_Disciplina().toString() + "]");
    }

}




//Insere elementos da Model Alunos

var vincula_alunos = document.getElementById('vincula_alunos');

vincula_alunos.addEventListener('submit', function (e) {
    insereNosCampos_Aluno()
    e.preventDefault();
});

function cbx_Alunos() {
    var arr = []; /* Cria array com todos os names dos check selecionados */
    $('.check1:checked').each(function (item) {
        /* Busca todos os elementos com o class .checked e que possuam um atributo checked. Nesse caso somente radio e checkbox possuem tal atributo */
        arr.push($(this).attr("name")); /* Inclui name do elemento em um array*/
    });
    return arr /* Retorna esse array */ ;
}

var insere_Aluno = document.getElementById("Insere_Alunos");

function insereNosCampos_Aluno() {
    insere_Aluno.setAttribute('value',cbx_Alunos() );

}