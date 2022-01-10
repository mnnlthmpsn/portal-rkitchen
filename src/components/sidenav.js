import { ArchiveIcon, CashIcon, CogIcon, HomeIcon, LogoutIcon } from '@heroicons/react/outline'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/authContext'

const SideNav = () => {

    const { logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const _logout = () => {
        logout()
        navigate('/', { replace: true })
    }

    return (
        <div className="flex flex-col w-24 justify-center items-center py-10 space-y-16 h-screen bg-white">
            <div className='flex flex-col space-y-4 items-center'>
                <Link to='/dashboard'><HomeIcon className='menu bg-teal-400' /></Link>
                <Link to='/transactions'><CashIcon className='menu bg-red-400' /></Link>
                <Link to='/orders'><ArchiveIcon className='menu bg-yellow-600 tooltip' title='Orders'/></Link>
            </div>
            <div className='flex flex-col items-center space-y-4'>
                <Link to='/settings'><CogIcon className='menu bg-blue-400' /></Link>
                <LogoutIcon className='menu bg-black' onClick={_logout}/>
            </div>
        </div>
    )
}

export default SideNav