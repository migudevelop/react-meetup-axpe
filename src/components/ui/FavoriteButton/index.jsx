import { memo } from 'react'
import ActionButton from '../ActionButton'
import useFavoriteButtonState from './hooks/useFavoriteButtonState'

export default memo(function FavoriteButton({ item = {} }) {
  const { isInFavorites, onToggleFavorite } = useFavoriteButtonState(item)
  return (
    <ActionButton handleOnClick={onToggleFavorite}>
      {isInFavorites ? 'Remove from favorites' : 'Add to favorites'}
    </ActionButton>
  )
})
