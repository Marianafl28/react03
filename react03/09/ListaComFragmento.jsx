import React from 'react';

const ListaComFragmento = () => {
  const itens = ['Maça 1kg', 'Chocolate 5kg', 'Agua 3L'];

  return (
    <>
      <h2>Listinha</h2>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListaComFragmento;
