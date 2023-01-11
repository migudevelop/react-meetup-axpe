import { memo } from 'react'
import classes from './FullPageLoader.module.css'
import Loader from '../Loader'

export default memo(function FullPageLoader() {
  return (
    <div className={classes.fullPageLoader}>
      <Loader />
    </div>
  )
})
