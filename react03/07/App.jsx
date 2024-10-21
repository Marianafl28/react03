import ListaDeTarefas from './ListaDeTarefas'; 

function App() {
  const tarefasIniciais = [
    { id: 1, texto: 'Planejar intercâmbio' },
    { id: 2, texto: 'Comprar o carro' },
    { id: 3, texto: 'Comer um bolinho' },
  ];

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ListaDeTarefas tarefasIniciais={tarefasIniciais} />
    </div>
  );
}

export default App;
