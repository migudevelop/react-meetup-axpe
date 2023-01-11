import { memo } from 'react'
import { ActionButton, Card } from 'components/ui'
import classes from './NewMeetupForm.module.css'

export default memo(function NewMeetupForm() {
  function submitHandler(event) {
    event.preventDefault()
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <ActionButton className={classes.actions}>Add Meetup</ActionButton>
      </form>
    </Card>
  )
})
