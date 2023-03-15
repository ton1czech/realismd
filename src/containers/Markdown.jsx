import { Converter } from 'showdown'

import '../styles/markdown.css'

export default function Markdown({ content }) {
  const processor = new Converter()
  const processed = processor.makeHtml(content)

  return (
    <div
      className='processed flex flex-col'
      dangerouslySetInnerHTML={{ __html: processed }}
    ></div>
  )
}
