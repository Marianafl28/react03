import ComponenteFilho from './ComponenteFilho';

function App() {
  const mensagemDoPai = 'Esta é a mensagem do componente pai!';

  return (
    <div>
      <h1>Componente Pai</h1>
      <ComponenteFilho mensagem={mensagemDoPai} /> 
    </div>
  );
}

export default App;

