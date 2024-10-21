const GaleriaDeImagens = ({ urls }) => {
    return (
      <div>
        {urls
          .filter((url) => url !== '') 
          .map((url, index) => (
            <img key={index} src={url} alt={`Imagem ${index}`} style={{ width: '200px', margin: '10px' }} />
          ))}
      </div>
    );
  };
  
  export default GaleriaDeImagens;
  