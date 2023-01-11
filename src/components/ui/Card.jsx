import { memo } from 'react'
import classes from './Card.module.css'

export default memo(function Card({ children }) {
  return <div className={classes.card}>{children}</div>
})
