import { memo } from 'react'
import { useFetch } from 'util-hooks/useFetch'
import { ActionButton } from 'components/ui'
import classes from './MeetupItem.module.css'
import { Card } from 'components/ui'

export default memo(function MeetupItem() {
  const { data } = useFetch({
    url: '/data.json'
  })

  if (!data) return <p>Loading...</p>
  let [item] = data

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <ActionButton>Add to favorites</ActionButton>
      </Card>
    </li>
  )
})
