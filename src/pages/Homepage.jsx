
import '../index.css'
// import '../App.css'
import ChatApp from '../components/ChatApp'
import Sidebar from '../components/Sidebar'

function Homepage() {


  return (
    <>
       <div className='main'>
            <div>
                <Sidebar/>
            </div>
            <div className='mainbar'>
              <ChatApp/>
            </div>
       </div>
    </>
  )
}

export default Homepage