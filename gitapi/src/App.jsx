import './App.css'
import Repositores from './Repositories'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();


function App() {


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Repositores />
        </QueryClientProvider>     
    </>
  )
}

export default App
