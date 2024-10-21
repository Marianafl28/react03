const ParagrafoEstilizado = ({ isHighlighted }) => {

    const estiloParagrafo = {
      color: isHighlighted ? 'purple' : 'black', 
      fontWeight: isHighlighted ? 'bold' : 'normal' 
    };
  
    return (
      <p style={estiloParagrafo}>
        Parágrafo estilo isHighlighted
      </p>
    );
  };
  
  export default ParagrafoEstilizado;
  