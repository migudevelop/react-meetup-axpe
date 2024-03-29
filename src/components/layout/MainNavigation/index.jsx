import { memo } from 'react'
import { ROUTES_LINKS } from 'routes'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Badge } from 'components/ui'
import classes from './MainNavigation.module.css'
import { useHiddenHeader } from 'hooks'
import { useFavorites } from 'providers/FavoritesProvider'

const VARIANTS = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -25 }
}

const TRANSITION = { ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }

export default memo(function MainNavigation() {
  const { hidden } = useHiddenHeader()
  const { favorites } = useFavorites()

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
            <NavLink className="nav-links" to={ROUTES_LINKS.ALL_MEETUPS_PAGE}>
              All Meetups
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-links" to={ROUTES_LINKS.NEW_MEETUP}>
              Add New Meetup
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to={ROUTES_LINKS.FAVORITES}>
              My Favorites
              <Badge text={favorites?.length} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
})
