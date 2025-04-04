export default function TodoListItem({ todo, onCompletedClick, onDeleteClick }) {
    return (
        <div>
            <h3>{todo.text}</h3>
            {todo.isCompleted && <p>Completed</p>}
            {todo.isCompleted 
            ? <button onClick={() => onDeleteClick(todo.text)}>Delete Item</button> 
            : <button onClick={() => onCompletedClick(todo.text)}>Complete Item</button>}
        </div>
    );
}
