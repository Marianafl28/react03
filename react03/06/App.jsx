import ParagrafoEstilizado from './ParagrafoEstilizado';

function App() {
  const destaque = true; 

  return (
    <div>
      <h1>Estilos Dinâmicos em React</h1>
      <ParagrafoEstilizado isHighlighted={destaque} /> 
    </div>
  );
}

export default App;
