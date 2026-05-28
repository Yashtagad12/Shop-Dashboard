import './App.css'
import MainDash from './Components/MainDash'
import Sidebar from './Components/Sidebar'


function App() {


  return (
    <>
      <div className='App'>
        <div className='AppGlass'>
          <Sidebar />
          <MainDash />
        </div>

      </div>

    </>
  )
}

export default App
