import { memo } from 'react'
import { MeetupItem, MeetupList } from 'components/meetups'
import { useFetch } from 'util-hooks/useFetch'

export default memo(function AllMeetupsPage() {
  const { data } = useFetch({
    url: '/data.json'
  })

  if (!data) return <p>Loading...</p>

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList>
        {data?.map((item) => (
          <MeetupItem key={item.id} item={item} />
        ))}
      </MeetupList>
    </section>
  )
})
