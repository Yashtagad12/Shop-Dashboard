import './App.css'
import MainDash from './Components/MainDash'
import Sidebar from './Components/Sidebar'
import RightSide from './Components/RightSide'

function App() {


  return (
    <>
      <div className='App'>
        <div className='AppGlass'>
          <Sidebar />
          <MainDash />
          <RightSide />
        </div>

      </div>

    </>
  )
}

export default App
