import { memo } from 'react'
import { MeetupItem, MeetupList } from 'components/meetups'

export default memo(function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList>
        <MeetupItem />
        <MeetupItem />
        <MeetupItem />
        <MeetupItem />
      </MeetupList>
    </section>
  )
})
