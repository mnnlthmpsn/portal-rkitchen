import { useForm } from "react-hook-form"
import { useContext } from 'react'
import { AuthContext } from "../contexts/authContext"
import { useNavigate } from 'react-router-dom'
import { req_login } from '../apis/auth.js'

const Index = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { setPayload } = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = async data => {
        const res = await req_login({ identifier: data.identifier, password: data.password })
        res && setPayload(res)
        res && navigate('/dashboard', { replace: true })
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center p-2 bg-gray-100 bg-login bg-center bg-no-repeat bg-cover">
            <form className="p-6 lg:p-10 w-full rounded-lg lg:w-1/3 space-y-5 backdrop-blur-sm bg-white/50" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col space-y-2">
                    <label>Email/Username</label>
                    <input className="form-control" placeholder="eg. admin@admin.com" {...register('identifier', { required: true })} />
                    {errors.identifier && <span className="text-red-600 text-xs font-medium">* This field is required</span>}
                </div>
                <div className="flex flex-col space-y-2">
                    <label>Password</label>
                    <input type='password' className="form-control" placeholder="********" {...register('password', { required: true })} />
                    {errors.password && <span className="text-red-600 text-xs font-medium">* This field is required</span>}
                </div>

                <button type="submit" className="btn w-full bg-blue-400 hover:bg-blue-500">Login</button>
            </form>
        </div>
    )
}

export default Index