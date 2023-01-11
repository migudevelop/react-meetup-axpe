import { memo } from 'react'
import MainNavigation from '../MainNavigation'
import classes from './MainLayout.module.css'
import { Outlet } from 'react-router-dom'

export default memo(function MainLayout() {
  return (
    <div data-test="app">
      <MainNavigation />
      <div>
        <main className={classes.main}>
          <Outlet />
        </main>
      </div>
    </div>
  )
})
