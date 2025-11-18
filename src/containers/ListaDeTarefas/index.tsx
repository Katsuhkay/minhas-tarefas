import Tarefa from '../../components/Tarefa'
import Container from './styles'

const tarefas = [
  {
    titulo: 'Nome da tarefa 1',
    prioridade: 'Importante',
    status: 'Pendente',
    descricao: 'Descrição da tarefa 1'
  },
  {
    titulo: 'Nome da tarefa 2',
    prioridade: 'Urgente',
    status: 'Concuída',
    descricao: 'Descrição da tarefa 2'
  },
  {
    titulo: 'Nome da tarefa 3',
    prioridade: 'Baixa',
    status: 'Atrasada',
    descricao: 'Descrição da tarefa 3'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
            descricao={t.descricao}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
