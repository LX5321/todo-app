import { ReactNode } from "react"

type ContainerType = {
    children : ReactNode
}

const Container = ({children} : ContainerType) => {
    return <main className="max-w-2xl mx-auto p-2">{children}</main>
}

export default Container