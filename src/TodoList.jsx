import TodoListItem from "./TodoListItem";

export default function TodoList({ completedTodos, incompleteTodos , onCompletedClick, onDeleteClick }) {
    return (
        <div>

            <h2>Completed Todos</h2>
            <div>
            {completedTodos.map((todo, index) => (
                <TodoListItem todo={todo} key={index} onCompletedClick={onCompletedClick} onDeleteClick={onDeleteClick}/>
                ))}
            </div>
        
            <h2>Incomplete Todos</h2>
            <div>
                {incompleteTodos.map((todo, index) => (
                <TodoListItem todo={todo} key={index} onCompletedClick={onCompletedClick} onDeleteClick={onDeleteClick}/>
                ))}
            </div>
        </div>
    );
    }