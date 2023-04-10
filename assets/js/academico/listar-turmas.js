// Listando turmas 
function listarTurmas() {
    contentAcademic.innerHTML = `
    <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        FRANCISCO TABOZA FILHO EMEF
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <div class='accordion-body-item'>
                <button onclick='turmaBt()' class='btn btn-success me-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>
                    <p>8 ANO BT 2023</p>
                </button>
            </div>
            <div class='accordion-body-item'>
                <button  onclick='turmaDt()' class='btn btn-success'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>
                    <p>8 ANO BT 2023</p>
                </button>
            </div>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        FRANCISCO TABOZA FILHO EMEF
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <div class='accordion-body-item'>
                <button class='btn btn-success me-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>
                    <p>8 ANO BT 2023</p>
                </button>
            </div>
            <div class='accordion-body-item'>
                <button class='btn btn-success'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>
                    <p>8 ANO BT 2023</p>
                </button>
            </div>
        </div>
      </div>
    </div>

    
   
  </div>
    `;
}

function turmaBt(){
    contentAcademic.innerHTML = `
    <h3>* ANO TURMA BT 2023</h3>
    <p>DADOS REFERENTE AO ANO LETIVO DE 2023</p>
    <hr>

    <div class='row'>
        <div class='col-12 mb-5'>
            <button class='btn btn-outline-secondary btn-lg'>Plano de Aula</button>
            <button class='btn btn-outline-secondary btn-lg'>Resumo de Atividade</button>
            <button class='btn btn-outline-secondary btn-lg'>Avaliação de Aprendizagem</button>
        </div>

        <div class='col-12'>
            <button class='btn btn-outline-secondary btn-lg'>Relatório Difênciais</button>
            <button class='btn btn-outline-secondary btn-lg'>Informações da Turma</button>
            <button class='btn btn-outline-secondary btn-lg'>Frequências</button>
        </div>
    </div>
    `;

}

function turmaDt(){
    contentAcademic.innerHTML = `
    <h3>* ANO TURMA DT 2023</h3>
    <p>DADOS REFERENTE AO ANO LETIVO DE 2023</p>
    <hr>

    <div class='row'>
        <div class='col-12 mb-5'>
            <button class='btn btn-outline-secondary btn-lg'>Plano de Aula</button>
            <button class='btn btn-outline-secondary btn-lg'>Resumo de Atividade</button>
            <button class='btn btn-outline-secondary btn-lg'>Avaliação de Aprendizagem</button>
        </div>

        <div class='col-12'>
            <button class='btn btn-outline-secondary btn-lg'>Relatório Difênciais</button>
            <button class='btn btn-outline-secondary btn-lg'>Informações da Turma</button>
            <button class='btn btn-outline-secondary btn-lg'>Frequências</button>
        </div>
    </div>
    `;
}

function btnTurma() {
    boxEcolaUm.innerHTML = `
    <button>8 ano d</button>
    `;
}
// Listando ambientes alfabetizador
function ambienteAlfabetizador() {
    contentAcademic.innerHTML = `
    <h1>Ambiente Alfabetizador</h1>
    `;
}

// Listando Meus Dados
function meusDados() {
    contentAcademic.innerHTML = `
    <h1>Meus Dados</h1>
    `;
}

// Listando Editar Perfil
function editarPerfil() {
    contentAcademic.innerHTML = `
    <h1>Editar Perfil</h1>
    `;
}

// Listando Planejamento Integrado
function planejamentoIntegrado() {
    contentAcademic.innerHTML = `
    <h1>Planejamento Integrado</h1>
    `;
}
