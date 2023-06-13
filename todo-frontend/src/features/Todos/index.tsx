import Container from "../../components/layouts/container"
import TodoList from "./components/TodoList"

const Todos = () => {
    const TODOS: TodoDetails[] = [
        { id: "1", title: "Eat food", desc: "will eat food at 12 am." },
        { id: "2", title: "Water plants", desc: "will water plants at 3pm." },
        { id: "3", title: "Play minecraft", desc: "will play minecraft with friends." },
        { id: "4", title: "Sleep", desc: "will sleep at 4pm" },
        { id: "5", title: "Read a book", desc: "will read a book." },
    ]
    return (
        <>
            <Container>
                <header className="border-b p-2">
                    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        Welcome user!
                    </h2>
                    <p className="leading-7 [&:not(:first-child)]:mt-2">
                        You've got {TODOS.length} tasks coming up!
                    </p>
                </header>
                <div>
                    <TodoList data={TODOS} />
                </div> 
            </Container>
        </>
    )
}

export default Todos