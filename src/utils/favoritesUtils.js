import { LOCAL_STORAGE_KEYS } from './constants'

const getLocalStorageFavorites = () =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.FAVORITES) || '[]')

const existInFavorites = (itemId) => {
  const favorites = getLocalStorageFavorites()
  return favorites?.map(({ id }) => id).includes(itemId)
}

const saveFavoritesInLocalStorage = (newFavorites) =>
  localStorage.setItem(
    LOCAL_STORAGE_KEYS.FAVORITES,
    JSON.stringify(newFavorites)
  )

export default {
  existInFavorites,
  saveFavoritesInLocalStorage,
  getLocalStorageFavorites
}
