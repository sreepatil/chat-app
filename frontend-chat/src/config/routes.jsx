import { Routes, Route } from 'react-router-dom'
import App from '../App'
import ChatPage from '../components/ChatPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />

      <Route
        path="/chat"
        element={
          <h1 className="text-3xl font-bold text-white">
            {<ChatPage />}
          </h1>
        }
      />

      <Route
        path="/about"
        element={
          <h1 className="text-3xl font-bold text-white">
            This is About Page
          </h1>
        }
      />

      <Route
        path="*"
        element={
          <h1 className="text-3xl font-bold text-white">
            404 Page Not Found
          </h1>
        }
      />
    </Routes>
  )
}

export default AppRoutes