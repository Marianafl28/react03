import GaleriaDeImagens from './GaleriaDeImagens';

function App() {
  const urls = [
    'https://blog.winesofargentina.com/wp-content/uploads/2021/09/Coxinhas_apertura.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5cuVY7Nzno96gfxVhyZCtemmvr4QV6iO4Ug&s',
    'https://cooknenjoy.com/wp-content/uploads/2022/05/Bolo-Aniversario-Matilda-02-1920x1442.jpg',
  ];

  return (
    <div>
      <h1>Galeria de Imagens</h1>
      <GaleriaDeImagens urls={urls} /> 
    </div>
  );
}

export default App;

