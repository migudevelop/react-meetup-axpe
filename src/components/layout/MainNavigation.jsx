import ROUTES_LINKS from '../../router/routesLinks'
import { NavLink } from 'react-router-dom'

import classes from './MainNavigation.module.css'

export default function MainNavigation() {
  return (
    <header className={classes.header} data-test="navigation-header">
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
            <NavLink to={ROUTES_LINKS.FAVOURITES}>My Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
