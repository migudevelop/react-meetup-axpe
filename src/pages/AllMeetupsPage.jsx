import { memo } from 'react'
import { MeetupItem, MeetupList } from 'components/meetups'
import { FullPageLoader } from 'components/ui'
import { useFetch } from 'hooks'
import { API_URLS } from 'utils'

export default memo(function AllMeetupsPage() {
  const { data, isLoading } = useFetch({
    url: API_URLS.MEETUPS
  })

  if (isLoading) return <FullPageLoader />

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
