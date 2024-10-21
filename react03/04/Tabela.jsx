// src/Tabela.jsx
const Tabela = ({ dados }) => {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((pessoa) => (
            <tr key={pessoa.id}>
              <td>{pessoa.id}</td>
              <td>{pessoa.nome}</td>
              <td>{pessoa.idade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Tabela;
  