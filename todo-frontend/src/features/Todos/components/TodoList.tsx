import TodoItem from "./TodoItem"

type TodoListType = {
    data: TodoDetails[]
}


const TodoList = ({data}: TodoListType) => {
    return (
        <ul className="pt-2 flex flex-col gap-4">
            {data.map(v => {
                return <TodoItem key={v.id} data={v} /> 
            })}
        </ul>
    )
}

export default TodoList