import { memo } from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

export default memo(function NewMeetupsPage() {
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm />
    </section>
  )
})
