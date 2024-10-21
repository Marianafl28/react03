const ComponenteCondicional = ({ isVisible }) => {
    return (
      <div>
        {isVisible ? <p>Esse é um paragrafo reinderizado!</p> : null}
      </div>
    );
  };
  
  export default ComponenteCondicional;
  