import { FavoritesProvider } from 'providers'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </FavoritesProvider>
  )
}

export default App
