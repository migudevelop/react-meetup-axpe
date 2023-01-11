import { memo } from 'react'
import classes from './MeetupList.module.css'

export default memo(function MeetupList({ children }) {
  return <ul className={classes.list}>{children}</ul>
})
