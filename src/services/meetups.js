import { useFetch } from 'hooks'
import { API_URLS } from 'utils'

export const getMeetups = () => {
  const requestState = useFetch({
    url: API_URLS.MEETUPS
  })
  return requestState
}
