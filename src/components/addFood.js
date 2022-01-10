import { useContext, Fragment } from "react"
import { useForm } from "react-hook-form"
import { req_add_food } from "../apis/foods"
import { FoodContext } from "../contexts/food"
import MobNav from "./mobile/mobNav"
import { useNavigate } from "react-router-dom"

const AddFood = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { addFood } = useContext(FoodContext)
    const router = useNavigate()

    const onSubmit = async data => {
        const formData = new FormData()

        const payload = {
            name: data.name,
            description: data.description,
            price: data.price,
            discount: data.discount,
        }

        formData.append('files.image', data.image[0], data.image[0].name)
        formData.append('data', JSON.stringify(payload))

        const res = await req_add_food(formData)
        addFood(res.data)
        router('/dashboard')
    }

    return (
        <Fragment>
            <div className="w-full lg:w-1/3 bg-white py-10 px-4 overflow-y-auto pb-24 lg:pb-0">
                <p className="font-bold text-2xl text-gray-400">Add Food</p>
                <form className="pt-5 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col space-y-2">
                        <label>Food Title</label>
                        <input className="form-control" placeholder="eg. Fufu & Goat Light Soup" {...register('name', { required: true })} />
                        {errors.name && <span className="text-red-600 text-xs font-medium">* This field is required</span>}
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label>Food Description</label>
                        <textarea className="form-control" placeholder="Short Description about food here" {...register('description', { required: true })} />
                        {errors.description && <span className="text-red-600 text-xs font-medium">* This field is required</span>}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-2">
                        <div className="flex flex-col space-y-2">
                            <label>Price (GHs) </label>
                            <input className="form-control" placeholder="15.00" {...register('price', { required: true })} />
                            {errors.price && <span className="text-red-600 text-xs font-medium">* This field is required</span>}
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label>Discount (%)</label>
                            <input className="form-control" placeholder="5" {...register('discount', { required: true })} />
                            {errors.discount && <span className="text-red-600 text-xs font-medium">* This field is required</span>}
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label>Food Image</label>
                        <input type="file" className="form-control" accept="image/*" {...register('image', { required: true })} />
                        {errors.image && <span className="text-red-600 text-xs font-medium">* This field is required</span>}
                    </div>

                    <div className="w-full flex justify-end">
                        <button type="submit" className="btn bg-blue-400 hover:bg-blue-500">Add Food</button>
                    </div>
                </form>
            </div>
            <MobNav />
        </Fragment>
    )
}

export default AddFood