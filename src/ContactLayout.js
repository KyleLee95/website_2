import React, { useEffect, useState } from 'react'
import { fetchContent } from './utils/content-utils'

export const ContactLayout = (props) => {
  const [cvItems, setCVItems] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    document.title = 'Contact | Kyle Lee'
    const getData = async () => {
      const cvItems = await fetchContent({ content_type: 'cv' })
      setCVItems(cvItems)
      setIsLoading(false)
    }
    getData()
  }, [])

  if (isLoading) {
    return null
  }

  return (
    <div>
      {cvItems?.map((item, i) => {
        const {
          fields: { title, link }
        } = item
        if (title === 'email') {
          return (
            <div>
              {title}:{' '}
              <a key={i} href={'mailto:' + link}>
                {link}
              </a>
              <br />
            </div>
          )
        }
        return (
          <div>
            {title}:{' '}
            <a key={i} href={link}>
              {link}
            </a>
            <br />
          </div>
        )
      })}
    </div>
  )
}
