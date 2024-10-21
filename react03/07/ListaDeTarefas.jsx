import { useState } from 'react';

const ListaDeTarefas = ({ tarefasIniciais }) => {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  const removerTarefa = (id) => {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novasTarefas);
  };

  return (
    <ul>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id}>
          {tarefa.texto}{' '}
          <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
        </li>
      ))}
    </ul>
  );
};

export default ListaDeTarefas;
