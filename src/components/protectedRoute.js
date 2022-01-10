import { useContext } from "react"
import { useLocation, Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/authContext"

const ProtectedRoute = ({ children }) => {

    const { isAuthenticated } = useContext(AuthContext)
    const location = useLocation()

    if (!isAuthenticated) {
        return <Navigate to='/' state={{ from: location }} replace />
    }

    return children
}

export default ProtectedRoute