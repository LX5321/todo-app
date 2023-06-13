import { ReactNode } from "react"

type CardType = {
    children: ReactNode
}


const Card = ({children}: CardType) => {
    return (
        <div className="p-4 shadow-md rounded-md">
            {children}
        </div>
    )
}

export default Card