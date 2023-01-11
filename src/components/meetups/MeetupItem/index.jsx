import { memo } from 'react'
import { FavoriteButton } from 'components/ui'
import classes from './MeetupItem.module.css'
import { Card } from 'components/ui'

export default memo(function MeetupItem({ item = {} }) {
  const { image, title, address, description } = item
  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <FavoriteButton item={item} />
      </Card>
    </li>
  )
})
