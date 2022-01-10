import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import MyLoader from "./components/loader"
import ProtectedRoute from "./components/protectedRoute"
import Index from "./pages"
import Home from "./pages/dashboard"
import MobAddFood from "./pages/mobile.js/mobAddFood"
import Orders from "./pages/orders"
import Settings from "./pages/settings"
import Transactions from "./pages/transactions"

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='dashboard' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='settings' element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path='transactions' element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
        <Route path='orders' element={<ProtectedRoute><Orders /></ProtectedRoute>} />

        {/* mobile routes */}
        <Route path='mobile/addFood' element={<ProtectedRoute><MobAddFood /></ProtectedRoute>} />
      </Routes>
      <MyLoader />
    </Fragment>
  )
}

export default App