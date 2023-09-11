import './App.css'
import Blogs from './components/Blogs'
import BookMarks from './components/BookMarks'
import Header from './components/Header'

function App() {
 

  return (
    <>
    <Header />
   <div className='md:flex items-center'>
      <Blogs />
      <BookMarks />
   </div>
      
    </>
  )
}

export default App
