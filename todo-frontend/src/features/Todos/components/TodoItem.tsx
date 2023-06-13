import Card from "../../../components/ui/card";

type TodoItemType = {
    data: TodoDetails
}

const TodoItem = ({data}: TodoItemType) => {
    const {title, desc} = data;
    return (
        <li>
            <Card>
                <div className="flex flex-col gap-4">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{title}</h3>
                    <p>{desc}</p>
                </div> 
            </Card> 
        </li>
    )
}

export default TodoItem;