import { useFetch } from 'hooks'
import { API_URLS, adapters } from 'utils'

export const getMeetups = () => {
  const requestState = useFetch({
    url: API_URLS.MEETUPS,
    mappedFn: adapters.mapMeetups
  })
  return requestState
}
