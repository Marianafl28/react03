import Card from './Card';

function App() {
  return (
    <div>
      <h1>Exemplo de um Card</h1>
      <Card>
        <h2>Título do Card 1 </h2>
        <p>Conteudo dento do Card.</p>
      </Card>
      <Card>
        <h2>Card 2</h2>
        <p>Conteudo do Card</p>
      </Card>
    </div>
  );
}

export default App;
