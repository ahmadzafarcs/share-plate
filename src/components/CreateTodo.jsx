import { useState } from "react"

export default function CreateTodo({setTodos, todos}) {
    const [todo, setTodo] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(todo);
        setTodos(prev => [...prev, {name: todo}]);
        localStorage.setItem("todos", [...todos])
    }

    return (
        <section>
            <form onSubmit={handleSubmit} className="bg-[#41644A] text-[#EBE1D1] flex items-center justify-center rounded">
                <input className="w-full p-2 text-lg outline-none" placeholder="apples e.t.c" value={todo} onChange={e => setTodo(e.target.value)} />
                <button className="text-[#E9762B] p-3 rounded hover:bg-[#0D4715] cursor-pointer">Create</button>
            </form>
        </section>
    )
}