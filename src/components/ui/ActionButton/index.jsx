import { memo } from 'react'
import classes from './ActionButton.module.css'

export default memo(function ActionButton({
  children,
  className = '',
  handleOnClick
}) {
  return (
    <div className={`${classes.actions} ${className}`}>
      <button onClick={handleOnClick}>{children}</button>
    </div>
  )
})
