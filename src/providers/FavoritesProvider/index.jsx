import { createContext, useContext } from 'react'
import useFavoritesState from './useFavoritesState'

export const FavoritesContext = createContext(null)

export const useFavorites = () => useContext(FavoritesContext)

export default function FavoritesProvider({ children }) {
  const favoritesState = useFavoritesState()
  return (
    <FavoritesContext.Provider value={favoritesState}>
      {children}
    </FavoritesContext.Provider>
  )
}
