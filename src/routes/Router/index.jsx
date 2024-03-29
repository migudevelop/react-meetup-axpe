import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { FullPageLoader } from 'components/ui'
import ROUTES_LINKS from '../routesLinks.js'
const MainLayout = lazy(() => import('components/layout/MainLayout'))
const AllMeetupsPage = lazy(() => import('pages/AllMeetupsPage'))
const Favorites = lazy(() => import('pages/Favorites'))
const NewMeetup = lazy(() => import('pages/NewMeetup'))

const Router = () => {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <Routes>
        <Route path={ROUTES_LINKS.HOME} element={<MainLayout />}>
          <Route index path={ROUTES_LINKS.HOME} element={<AllMeetupsPage />} />
          <Route
            path={ROUTES_LINKS.ALL_MEETUPS_PAGE}
            element={<AllMeetupsPage />}
          />
          <Route path={ROUTES_LINKS.FAVORITES} element={<Favorites />} />
          <Route path={ROUTES_LINKS.NEW_MEETUP} element={<NewMeetup />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
export default Router
