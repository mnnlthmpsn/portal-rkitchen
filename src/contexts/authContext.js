import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

const AuthContextProvider = props => {

    const [isAuthenticated, setIsAuthenticated] = useState(() => !!sessionStorage.getItem('qqrv'))

    const setPayload = payload => {
        const pd_stringified = JSON.stringify(payload)
        const encoded_pd = btoa(pd_stringified)
        sessionStorage.setItem('qqrv', encoded_pd)
        !!sessionStorage.getItem('qqrv') && setIsAuthenticated(true)
    }

    const getPayload = () => {
        const decoded_pd = atob(sessionStorage.getItem('qqrv'))
        const pd_parsed = JSON.parse(decoded_pd)
        return pd_parsed
    }

    const logout = () => {
        sessionStorage.removeItem('qqrv')
        setIsAuthenticated(false)
    }

    useEffect(() => {
        setIsAuthenticated(!!sessionStorage.getItem('qqrv'))
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, getPayload, setPayload, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider