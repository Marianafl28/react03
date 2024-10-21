const GaleriaDeImagens = ({ imagens }) => {
    return (
      <div>
        {imagens.map((imagem, index) => (
          <img
            key={index}
            src={imagem.url}
            alt={imagem.altText} 
            style={{ width: '200px', margin: '10px' }} 
          />
        ))}
      </div>
    );
  };
  
  export default GaleriaDeImagens;
  