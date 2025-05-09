import { useState } from "react"
export default function NewTodoForm({ onCreateClicked}) {

    const [newText , setNewText] = useState('')
    return (
        <div>
            <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} placeholder="Enter new todo" />
            <button onClick={() => onCreateClicked(newText)}>Create Todo</button>
        </div>
    )
}