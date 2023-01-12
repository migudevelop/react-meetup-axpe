import { memo } from 'react'
import classes from './Badge.module.css'

export default memo(function Badge({ text = 0 }) {
  return (
    <span id="badge" className={classes.badge}>
      {text}
    </span>
  )
})
