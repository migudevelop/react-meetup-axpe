import { FavoritesProvider } from 'providers'
import { BrowserRouter } from 'react-router-dom'
import Router from '../routes/Router'

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
