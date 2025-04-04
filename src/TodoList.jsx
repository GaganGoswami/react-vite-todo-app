import TodoListItem from "./TodoListItem";

export default function TodoList({ completedTodos, incompleteTodos }) {
    return (
        <div>

            <h2>Completed Todos</h2>
            <div>
            {completedTodos.map((todo, index) => (
                <TodoListItem todo={todo} key={index}/>
                ))}
            </div>
        
            <h2>Incomplete Todos</h2>
            <div>
                {incompleteTodos.map((todo, index) => (
                <TodoListItem todo={todo} key={index}/>
                ))}
            </div>
        </div>
    );
    }