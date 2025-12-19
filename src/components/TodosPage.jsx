import { useState } from "react";
import CreateTodo from "./CreateTodo";
import { useEffect } from "react";

export default function TodosPage() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        let t = localStorage.getItem("todos");
        if(t) {
            console.log(t)
            setTodos(t)
        }
    }, [])

    return <section>
        <CreateTodo setTodos={setTodos} />

        <div>
            <table className="w-full mt-2">
                <thead className="text-[#41644A] bg-[#41644a2b]">
                    <tr>
                        <td>Name</td>
                        <td>Operation</td> 
                    </tr>
                </thead>
                <tbody> 
                    {todos?.map((todo, i) => {
                        return <tr key={i}>
                            <td className="font-bold italic">{todo.name}</td> 
                            <td>
                                <button className="text-[#0D4715] cursor-pointer">complete</button>
                            </td>
                        </tr>
                    })}   
                </tbody>
            </table>
        </div>
    </section>
}