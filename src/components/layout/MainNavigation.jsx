import { memo } from 'react'
import ROUTES_LINKS from '../../router/routesLinks'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Badge from './Badge'
import classes from './MainNavigation.module.css'
import useHiddenHeader from 'hooks/layout/useHiddenHeader'

const VARIANTS = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -25 }
}

const TRANSITION = { ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }

export default memo(function MainNavigation() {
  const { hidden } = useHiddenHeader()

  return (
    <motion.header
      variants={VARIANTS}
      animate={hidden ? 'hidden' : 'visible'}
      transition={TRANSITION}
      className={classes.header}
      data-test="navigation-header"
    >
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES_LINKS.ALL_MEETUPS_PAGE}>All Meetups</NavLink>
          </li>

          <li>
            <NavLink to={ROUTES_LINKS.NEW_MEETUP}>Add New Meetup</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES_LINKS.FAVOURITES}>
              My Favorites
              <Badge />
            </NavLink>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
})
