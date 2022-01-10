import { ArchiveIcon, CashIcon, CogIcon, HomeIcon, LogoutIcon } from '@heroicons/react/outline'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/authContext'

const MobNav = () => {

    const { logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const _logout = () => {
        logout()
        navigate('/', { replace: true })
    }

    return (
        <div className="fixed lg:hidden w-full bottom-0">
            <div className="grid grid-cols-5 items-center border-t bg-gray-200 justify-center place-items-center py-1 pt-3">
                <Link to='/dashboard' className='flex flex-col items-center justify-center'>
                    <HomeIcon className='menu bg-teal-400' />
                    <p className='text-xs text-gray-600 font-bold py-1'>Home</p>
                </Link>
                <Link to='/transactions' className='flex flex-col items-center justify-center'>
                    <CashIcon className='menu bg-red-400' />
                    <p className='text-xs text-gray-600 font-bold py-1'>Transactions</p>
                </Link>
                <Link to='/orders' className='flex flex-col items-center justify-center'>
                    <ArchiveIcon className='menu bg-yellow-600 tooltip' title='Orders' />
                    <p className='text-xs text-gray-600 font-bold py-1'>Orders</p>
                </Link>

                <Link to='/settings' className='flex flex-col items-center justify-center'>
                    <CogIcon className='menu bg-blue-400' />
                    <p className='text-xs text-gray-600 font-bold py-1'>Settings</p>
                </Link>
                <div className='flex flex-col items-center justify-center' onClick={_logout}>
                    <LogoutIcon className='menu bg-black' />
                    <p className='text-xs text-gray-600 font-bold py-1'>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default MobNav