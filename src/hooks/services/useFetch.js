import { useEffect, useState } from 'react'

export const useFetch = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    fetch(url)
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
