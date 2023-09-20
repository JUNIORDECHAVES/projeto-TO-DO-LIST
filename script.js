// variavel
const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')
let minhalistadeitens = []

function adicionarNovaTarefa(){
    minhalistadeitens.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''
    mostrarTarefas()
}

function mostrarTarefas() {
    let novaLi = ''
    /* forEach = estrutura de repetição utilizada para manipulação de array */
    minhalistadeitens.forEach( (item, posicao) => {
        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
            <img src="img/checked.png" alt="checkd-na-tarefa" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p> 
            <img src="img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
        </li>

        `
    })

    listaCompleta.innerHTML = novaLi 

    localStorage.setItem('lista,', JSON.stringify(minhalistadeitens))
}

function concluirTarefa(posicao) {
    minhalistadeitens[posicao].concluida = !minhalistadeitens[posicao].concluida

    mostrarTarefas()
}

/* função que vai remover o item da tela e do array*/
function deletarItem(posicao) {
    minhalistadeitens.splice(posicao, 1)

    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDOLocalStorage = localStorage.getItem('lista')
    if (tarefasDOLocalStorage){
    minhalistadeitens = JSON.parse(tarefasDOLocalStorage)
    }
    mostrarTarefas()
}

recarregarTarefas()
//adicina um evento
button.addEventListener('click', adicionarNovaTarefa)