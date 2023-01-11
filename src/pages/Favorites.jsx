import { memo } from 'react'
import { MeetupItem, MeetupList } from 'components/meetups'
import { useFavorites } from 'providers/FavoritesProvider'

export default memo(function FavoritesPage() {
  const { favorites } = useFavorites()

  return (
    <section>
      <h1>Favorites Page</h1>
      <MeetupList>
        {favorites?.map((item) => (
          <MeetupItem key={item.id} item={item} />
        ))}
      </MeetupList>
    </section>
  )
})
