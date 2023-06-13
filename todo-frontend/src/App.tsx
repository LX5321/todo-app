import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import Todos from "./features/Todos"

const queryClient = new QueryClient()
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
        <Todos /> 
    </QueryClientProvider>
  )
}

export default App