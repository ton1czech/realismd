import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Markdown from './containers/Markdown'
import UserInput from './containers/UserInput'
import { useState } from 'react'

const App = () => {
  const [content, setContent] = useState('')

  return (
    <>
      <Navbar />
      <div className='mx-auto grid max-w-screen-2xl grid-cols-[1fr_1px_1.8fr]'>
        <UserInput content={content} setContent={setContent} />
        <div className='h-full w-[1px] bg-black' />
        <Markdown content={content} />
      </div>
      <Footer />
    </>
  )
}

export default App
