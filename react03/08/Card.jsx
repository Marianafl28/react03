const Card = ({ children }) => {
    const cardStyle = {
      border: '1px solid purple', 
      borderRadius: '8px',     
      padding: '16px',          
      margin: '16px',           
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
    };
  
    return <div style={cardStyle}>{children}</div>;
  };
  
  export default Card;
  