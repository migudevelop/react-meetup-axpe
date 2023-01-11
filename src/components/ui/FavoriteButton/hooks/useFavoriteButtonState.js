import { useState } from 'react'
import { useFavorites } from 'providers/FavoritesProvider'
import { favoritesUtils } from 'utils'

export default function useFavoriteButtonState(item = {}) {
  const { id: itemId } = item
  const [isInFavorites, setIsInFavorites] = useState(
    favoritesUtils.existInFavorites(itemId)
  )
  const { addFavorite, removeFavorite } = useFavorites()
  const onToggleFavorite = () => {
    if (favoritesUtils.existInFavorites(itemId)) {
      removeFavorite(itemId)
    } else {
      addFavorite(item)
    }
    setIsInFavorites(!isInFavorites)
  }

  return { isInFavorites, onToggleFavorite }
}
