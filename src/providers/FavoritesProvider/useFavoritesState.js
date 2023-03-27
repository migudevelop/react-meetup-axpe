import { useState, useCallback } from 'react'
import { favoritesUtils } from 'utils'

export default function useFavoritesState() {
  const [favorites, setFavorites] = useState(() =>
    favoritesUtils.getLocalStorageFavorites()
  )

  const addFavorite = useCallback(
    (newFavorite) => {
      const newFavorites = [...favorites, newFavorite]
      favoritesUtils.saveFavoritesInLocalStorage(newFavorites)
      setFavorites(newFavorites)
    },
    [favorites]
  )

  const removeFavorite = useCallback(
    (favoriteId) => {
      const newFavorites = favorites.filter((fav) => fav?.id != favoriteId)
      favoritesUtils.saveFavoritesInLocalStorage(newFavorites)
      setFavorites(newFavorites)
    },
    [favorites]
  )

  return { favorites, addFavorite, removeFavorite }
}
