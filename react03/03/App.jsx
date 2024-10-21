import ComponenteCondicional from './ComponenteCondicional';

function App() {
  const visibilidade = true; 

  return (
    <div>
      <h1>Renderização Condicional</h1>
      <ComponenteCondicional isVisible={visibilidade} />
    </div>
  );
}

export default App;
