import ListaDeNomes from './ListaDeNomes';

function App() {
  const nomes = ['Ana', 'Bruno', 'Carlos', 'Daniela'];

  return (
    <div>
      <h1>Lista de Nomes</h1>
      <ListaDeNomes nomes={nomes} />
    </div>
  );
}

export default App;



