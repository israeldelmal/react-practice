import { useTodos } from './hooks/todos.hook' 
import Todo from './components/todo'
import GlobalStyles from './styles/global'
import { Main } from './App.styled'

function App() {
    const { todos } = useTodos()

    return (
        <Main>
            <GlobalStyles/>
            { todos ? todos.map(todo => (
                <Todo key={ todo.id } title={ todo.title } />
            )) : <Todo title={ 'Without Todos' } /> }
        </Main>
    );
}

export default App