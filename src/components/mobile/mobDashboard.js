import { PlusIcon } from "@heroicons/react/solid"
import { Link } from "react-router-dom"
import { useContext } from "react/cjs/react.development"
import { FoodContext } from "../../contexts/food"
import FoodCard from "../foodCard"
import MobNav from "./mobNav"

const MobDashboard = () => {

    const { foods } = useContext(FoodContext)
    return (
        <div className="block lg:hidden">
            <div className="sticky top-0 flex justify-between items-center py-2 px-4 border-b z-10 bg-gray-100">
                <p className="font-bold text-lg text-gray-500">Dashboard</p>
                <Link to='/mobile/addFood' className="flex items-center justify-center btn bg-blue-400 space-x-2">
                    <PlusIcon className="h-4" />
                    <p>Add Food</p>
                </Link>
            </div>

            {/* display foods */}
            <div className="px-4 pb-24">
                {
                    foods.length > 0
                        ? foods.map(food => (
                            <FoodCard food={food} key={food.id} />
                        ))
                        : <p className="text-center">No foods added</p>
                }
            </div>

            {/* floating nav */}
            <MobNav />
        </div>
    )
}

export default MobDashboard