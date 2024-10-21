import Tabela from './Tabela';

function App() {
  const pessoas = [
    { id: 1, nome: 'Lilly', idade: 22 },
    { id: 2, nome: 'Bruno', idade: 18 },
    { id: 3, nome: 'Mars', idade: 40 }
  ];

  return (
    <div>
      <h1>Tabela de Pessoas</h1>
      <Tabela dados={pessoas} />
    </div>
  );
}

export default App;

