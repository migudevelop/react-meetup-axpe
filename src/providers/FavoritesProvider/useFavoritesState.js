import { useState, useCallback } from 'react'

export default function useFavoritesState() {
  const [favorites, setFavorites] = useState([])

  const addFavorite = useCallback(
    (newFavorite) => setFavorites((prev) => [...prev, newFavorite]),
    [favorites]
  )

  const removeFavorite = useCallback(
    (favoriteId) =>
      setFavorites((prev) => prev.filter((fav) => fav?.id != favoriteId)),
    [favorites]
  )

  return { favorites, addFavorite, removeFavorite }
}
