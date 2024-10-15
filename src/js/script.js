// MODAL TASK 
  const openModal = document.getElementById('openListTask');
  const modal = document.getElementById('listTask');
  const closeModal = document.getElementById('closeListTask');
  
  // Abrir o modal
  openModal.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });
  
  // Fechar o modal ao clicar no botão de fechar
  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
  
  // Fechar o modal ao clicar fora do conteúdo (no overlay)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

// ATUALIZAR DATA
  // Array com os dias da semana e os meses do ano
  const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
  const mesesAno = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

  // Obter a data atual
  const dataAtual = new Date();

  // Obter o dia da semana, dia do mês, mês e ano
  const diaSemana = diasSemana[dataAtual.getDay()];
  const dia = dataAtual.getDate();
  const mes = mesesAno[dataAtual.getMonth()];
  const ano = dataAtual.getFullYear();

  // Formatar a frase
  const frase = `hoje é ${diaSemana}, ${dia} de ${mes} de ${ano}!`;

  // Exibir a frase em algum elemento do HTML
  document.getElementById('data').textContent = frase;

  // Exibindo saudação
  const hora = dataAtual.getHours()

  if (hora < 12 && hora >= 6) {
    document.getElementById('hora').textContent = "Bom dia";
  } else if (hora >= 12 && hora < 18) {
    document.getElementById('hora').textContent = "Boa tarde";
  } else {
    document.getElementById('hora').textContent = "Boa noite";
  }