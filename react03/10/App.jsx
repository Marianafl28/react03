import GaleriaDeImagens from './GaleriaDeImagens';

function App() {
  const imagens = [
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylNUUCDUjHqIcDtVQsHz6yYT5BrpMbmUaWQ&s', altText: 'Imagem 1 MADRID' },
    { url: 'https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/09/basilica-sagrada-familia.jpg', altText: 'Imagem 2 BARCELONA' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Budapest_Hungarian_Parliament_%2831363963556%29.jpg/800px-Budapest_Hungarian_Parliament_%2831363963556%29.jpg', altText: 'imagem 3 BUDAPESTE' },
  ];

  return (
    <div>
      <h1>Galeria de Imagens com Texto Alternativo Dinâmico</h1>
      <p>Cidades da EUROPA</p>
      <GaleriaDeImagens imagens={imagens} /> 
    </div>
  );
}

export default App;
