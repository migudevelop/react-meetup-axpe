import { useEffect, useState } from 'react'
import { API_URLS } from 'utils'

export const useFetch = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    fetch(`${API_URLS.LOCA_URL}${url}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json)
        setIsLoading(false)
      })
      .catch(() => {
        setData(null)
        setIsLoading(false)
      })
  }, [url])

  return { isLoading, data }
}

export default useFetch
