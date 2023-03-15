import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Markdown from './containers/Markdown'
import UserInput from './containers/UserInput'

const App = () => {
  return (
    <div class='font-roboto'>
      <Navbar />
      <div class='grid grid-cols-[1fr_1px_1.5fr]'>
        <UserInput />
        <div class='h-full w-[1px] bg-black' />
        <Markdown />
      </div>
      <Footer />
    </div>
  )
}

export default App
