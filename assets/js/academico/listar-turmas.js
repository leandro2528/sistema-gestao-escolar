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
                <button onclick='turmaBt()' class='btn btn-success btn-sm me-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>
                    <p>8 ANO BT 2023</p>
                </button>
            </div>
            <div class='accordion-body-item'>
                <button  onclick='turmaDt()' class='btn btn-success btn-sm'>
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
                <button class='btn btn-success btn-sm me-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>
                    <p>8 ANO BT 2023</p>
                </button>
            </div>
            <div class='accordion-body-item'>
                <button class='btn btn-success btn-sm'>
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

function turmaBt() {
    contentAcademic.innerHTML = `
    <h3>* ANO TURMA BT 2023</h3>
    <p>DADOS REFERENTE AO ANO LETIVO DE 2023</p>
    <hr>

    <div class='row'>
        <div class='col-12 mb-5 d-flex justify-content-between'>
            <button onclick='planoDeAulaturmaBt()' class='btn btn-outline-secondary btn-lg'>Plano de Aula</button>
            <button class='btn btn-outline-secondary btn-lg'>Resumo de Atividade</button>
            <button class='btn btn-outline-secondary btn-lg'>Avaliação de Aprendizagem</button>
        </div>

        <div class='col-12 d-flex justify-content-between''>
            <button class='btn btn-outline-secondary btn-lg'>Relatório Difênciais</button>
            <button class='btn btn-outline-secondary btn-lg'>Informações da Turma</button>
            <button class='btn btn-outline-secondary btn-lg'>Frequências</button>
        </div>
    </div>
    `;

}

// plano de aula

var planosAula = [
    {
        data: '10/04/2023',
        componente: 'Geografia',
        unidadeTematica: 'O sujeito e seu lugar no mundo',
        objetoConecimento: 'Divercidade dinâmica da população mundial e local',
        habilidades: 'Descrever caracteristica observadas de seus lugares',
        conceito: 'Atividade de integração - Geografia, o pessoal e o social.',
        metodologia: 'Nosso primeiro dia de aula se dará com a realização de uma dinâmica',
        atividadeComplementar: 'Atividade no caderno sobre auto reconhecimento.',
        avaliacao: 'A avaliação se dará de forma processual' 
    },
    {
        data: '10/04/2023',
        componente: 'Geografia',
        unidadeTematica: 'O sujeito e seu lugar no mundo',
        objetoConecimento: 'Divercidade dinâmica da população mundial e local',
        habilidades: 'Descrever caracteristica observadas de seus lugares',
        conceito: 'Atividade de integração - Geografia, o pessoal e o social.',
        metodologia: 'Nosso primeiro dia de aula se dará com a realização de uma dinâmica',
        atividadeComplementar: 'Atividade no caderno sobre auto reconhecimento.',
        avaliacao: 'A avaliação se dará de forma processual' 
    },
    {
        data: '10/04/2023',
        componente: 'Geografia',
        unidadeTematica: 'O sujeito e seu lugar no mundo',
        objetoConecimento: 'Divercidade dinâmica da população mundial e local',
        habilidades: 'Descrever caracteristica observadas de seus lugares',
        conceito: 'Atividade de integração - Geografia, o pessoal e o social.',
        metodologia: 'Nosso primeiro dia de aula se dará com a realização de uma dinâmica',
        atividadeComplementar: 'Atividade no caderno sobre auto reconhecimento.',
        avaliacao: 'A avaliação se dará de forma processual' 
    }
];

function mostrarPlanoAula(cadaPlaAula) {
    return `
    <tr>
        <td>${cadaPlaAula.data}</td>
        <td>${cadaPlaAula.componente}</td>
        <td>${cadaPlaAula.unidadeTematica}</td>
        <td>
            <button class='btn btn-primary btn-sm'>Copiar</button>
            <button class='btn btn-warning btn-sm'>Editar</button>
            <button class='btn btn-success btn-sm'>Gerar PDF</button>
            <button class='btn btn-danger btn-sm'>Excluir</button>
        </td>
    </tr>
    `;
}

function planoDeAulaturmaBt() {
    contentAcademic.innerHTML = `
    <div class='row'>
        <div class='col-12'>
            <h5> REGISTROS DE PLANEJAMENTOS (FUNDAMENTAL) 8 ANO BT 2023 </h5>
        </div>

        <hr>

        <div class='col-12 d-flex justify-content-between'>
           <button class='d-flex btn btn-success me-5 btn-sm'>
                <span class='me-3'>Planejamentos Anteriores</span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                </span>
           </button>

           <button class='d-flex btn btn-success btn-sm'>
                <span class='me-3'>Gerar PDF</span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                </span>
           </button>

           <button class='d-flex btn btn-success btn-sm'>
                <span class='me-3'>Planejamentos Deletados</span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                </span>
           </button>

           <button class='d-flex btn btn-primary btn-sm' onclick='novoPlanoDeAula()'>
                <span class='me-3'>Novo</span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </span>
           </button>

        </div>
    </div>

    <br>

    <table class="table table-hover table-striped table-bordered mt-4">
        <thead class='table-dark text-white'>
            <tr>
                <th>Data</th>
                <th>Docente / Subistituto</th>
                <th>Componente</th>
                <th>Opções</th>
            </tr>
        </thead>
        <tbody>
            ${planosAula.map(mostrarPlanoAula).join('')}
        </tbody>
</table>
    `;
}

function turmaDt() {
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

// Novo plano de aula
function novoPlanoDeAula() {
    contentAcademic.innerHTML = `
    <div class="alert alert-warning" role="alert">
        <h6>IMPORTANTE!</h6>
        Caso algum dos seguintes campos (Componente Curricular, Unidade 
        Temática, Objeto de conhecimento ou Habilidades) não carregar 
        nenhum resultado enquanto você preenche o formulário abaixo, 
        pode ser que falte algum dado referente as habilidades no banco 
        de dados do SGE. Nesse caso pedimos para que você informe ao técnico 
        responsável as seguintes informações (Etapa, Componente Curricular, 
        Unidade Temática, Objeto de conhecimento e Habilidade)
        para que nossa equipe possa incluir os dados faltantes.
    </div>
    <h6>DOCENTE:</h6>
    <form onsubmit='enviarPlanoAula()'>
        <div class='row justify-content-center'>
            <div class='col-6 d-flex justify-content-between'>
                    <div class='mb-2'>
                        <label>Data (DD/MM/AAA</label>
                        <input type='date' class='form-control'>
                    </div>
                    <div class='mb-2'>
                        <label>Componêntes Curricular</label>
                        <input type='text' class='form-control'>
                    </div>
            </div>
        </div>

        <div class='row justify-content-center'>
            <div class='col-6'>
                <div class='mb-2'>
                    <label>Unidade Temática:</label>
                    <input type='text' class='form-control'>
                </div>

                <div class='mb-2'>
                    <label>Objetos de Conhecimentos</label>
                    <input type='text' class='form-control'>
                </div>

                <div class='mb-2'>
                    <label>Habilidades</label>
                    <input type='text' class='form-control'>
                </div>

                <div class='mb-2'>
                    <label>Conceito/Conteúdo</label>
                    <input type='text' class='form-control'>
                </div>

                <div class='mb-2'>
                    <label>Metodologia: (Acolhida, Estratégias, Plano Estruturante) </label>
                    <textarea class="form-control"></textarea>
                </div>

                <div class='mb-2'>
                    <label>Atividades Complementares</label>
                    <input type='text' class='form-control'>
                </div>

                <div class='mb-5'>
                    <label>Avaliação</label>
                    <input type='text' class='form-control'>
                </div>

                <div class='mb-5 d-flex justify-content-center'>
                    <button class='btn btn-primary btn-lg'>Salvar</button>
                </div>
            </div>
        </div>
    </form>
    `;
}

// Criando formulario de plano de aula
function enviarPlanoAula() {
    event.preventDefault();

    enviarPlanoAula.push({
        id: planosAula.length + 1,
        data: data.value = new Date().toLocaleDateString('pt-br', {timeZone: 'utc'}),
        componente: component.value,
        unidadeTematica: unidadeTematica.value,

    });

    alert("Plano de aula salvo com sucesso!");

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
