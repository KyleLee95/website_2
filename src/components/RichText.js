import React from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export const RichText = (props) => {
  const { text } = props
  const convertedText = documentToHtmlString(text)
  return (
    <>
      <div
        className="text"
        dangerouslySetInnerHTML={{ __html: convertedText }}
      />
    </>
  )
}
