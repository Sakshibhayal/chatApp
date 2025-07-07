import './App.css'
import useSocket from './hooks/useSocket'
import VisitorList from './pages/visitorList'
import ChatWindow from './pages/chatWindow'
import VisitorProfile from './pages/visitorProfile'

function App() {
  useSocket();
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <VisitorList />
      <ChatWindow />
      <VisitorProfile />
    </div>
  )
}

export default App
