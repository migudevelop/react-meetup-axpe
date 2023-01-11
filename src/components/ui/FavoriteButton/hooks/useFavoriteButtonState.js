import { useState } from 'react'
import { useFavorites } from 'providers/FavoritesProvider'

export default function useFavoriteButtonState(item = {}) {
  const [isInFavorites, setIsInFavorites] = useState(false)
  const { favorites, addFavorite, removeFavorite } = useFavorites()
  const { id: itemId } = item
  const onToggleFavorite = () => {
    if (favorites?.map(({ id }) => id).includes(itemId)) {
      removeFavorite(itemId)
    } else {
      addFavorite(item)
    }
    setIsInFavorites(!isInFavorites)
  }

  return { isInFavorites, onToggleFavorite }
}
