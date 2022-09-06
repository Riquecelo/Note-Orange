// ******************** Adiciona card ***********************
const addBtn = document.querySelector(".cad_curso")

addBtn.addEventListener('click', function(e){
    e.preventDefault()

    let curso = document.querySelector('#nomeCurso').value;
    let quantidadeAluas = document.querySelector('#aulas').value;

    //Condição para criar o card aula
    if(curso && quantidadeAluas){
        
//*********** Lógica para criar o Card-Aula *****************

        //clonando card original
        let cardModelo = document.querySelector('.card_modelo')
        let cardCurso = cardModelo.cloneNode(true)

        //adicionando valor do input ao título do card
        cardCurso.querySelector('.titulo_curso_card').textContent = curso;
        cardCurso.querySelector('.um').textContent = quantidadeAluas;

        //removendo classes desnecessarias
        cardCurso.classList.remove('card_modelo')
        cardCurso.classList.remove('hide')
        cardCurso.classList.add('card_curso')

        //adicionando o novo card na área de cards aulas
        let secaoCard = document.querySelector('.secao_card')
        secaoCard.appendChild(cardCurso)

        //fução deleta card
        const delCard = cardCurso.querySelector('.del_card').addEventListener('click', function(){
           //deletaCard(this);
            this.parentNode.remove(true)
        })
        
        //Limpa texto do input
        document.querySelector('#nomeCurso').value='';
        document.querySelector('#aulas').value='';

//***** Lógica da adição de itens na lista do Card-Aula ********
        const addAula = cardCurso.querySelector('.add_aula')
        addAula.addEventListener('click', function(e){
            e.preventDefault();

            let listaModelo = cardCurso.querySelector('.lista_modelo')
            let cloneListaModelo = listaModelo.cloneNode(true)

            cloneListaModelo.classList.remove('lista_modelo')
            cloneListaModelo.classList.remove('hide')

            let temaAula = cardCurso.querySelector('#tituloAula').value;
            let listaAula = cloneListaModelo.querySelector('.ass_aula');
            let numAula = cardCurso.querySelector('#numAula').value;
            let listaNumAula = cloneListaModelo.querySelector('.num_aula')

            listaAula.innerHTML = temaAula
            listaNumAula.innerHTML = numAula

            let listaMae = cardCurso.querySelector('.lista_mae')
            listaMae.appendChild(cloneListaModelo)

            //limpa texto
            cardCurso.querySelector('#tituloAula').value='';
            cardCurso.querySelector('#numAula').value='';

/********* Lógica do botão deleta item da lista ********/   

            let deletaItem = cloneListaModelo.querySelector('.deleta_item_lista')
            deletaItem.addEventListener('click', function(){
                this.parentNode.remove(true)
            })

//******** Lógica do botão marca item da lista

            let itemVisto = cloneListaModelo.querySelector('.marca_item_lista')
            itemVisto.addEventListener('click', function(){
                listaAula.classList.toggle('visto')
            })
        })
    }else{
        alert('Informe o nome do curso e a quatidade de aulas para criar seu controle de aulas.')
    } 
})

//Função deleta Card
/*function deletaCard(deletado){
    deletado.parentNode.remove(true)
}*/
