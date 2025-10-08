import Tarefas from '../../components/Tarefa'
import { Container } from './styles'

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      <li>
        <Tarefas />
      </li>
      <li>
        <Tarefas />
      </li>
      <li>
        <Tarefas />
      </li>
      <li>
        <Tarefas />
      </li>
      <li>
        <Tarefas />
      </li>
    </ul>
  </Container>
)

export default ListaDeTarefas
