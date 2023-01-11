import { useFavorites } from 'providers/FavoritesProvider'
import { memo } from 'react'
import classes from './Badge.module.css'

export default memo(function Badge() {
  const { favorites } = useFavorites()
  return <span className={classes.badge}>{favorites?.length}</span>
})
